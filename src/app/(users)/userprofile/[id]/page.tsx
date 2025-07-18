import { getAllUsers, getUserPageDataById } from "../../action";

export  type PageProps = {
  params: Promise<{ id: string }>;
}


// will only build pages for the IDs returned by generateStaticParams
export const dynamicParams = false

export async function generateStaticParams() {
    // cannot pass data directly to UserProfile
    const users = await getAllUsers()
    const result = users.map(x => ({ id: String(x.id) }) );

    return result 
}

 
async function  UserProfile ( { params }: PageProps)  {
    const { id } = await params;
     // cannot pass full data directly to UserProfile params
    const userData = await getUserPageDataById(+id);
    const name = userData?.name || '';
 
    return (
        <div>
            USER 
            ID: {id}
            Name: {name}
        </div>
    )
}

export default UserProfile;