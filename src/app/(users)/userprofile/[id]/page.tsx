export  type PageProps = {
  params: Promise<{ id: string }>;
}

export const dynamicParams = false

export async function generateStaticParams() {
    const users = Array.from({ length: 11}, (_, i) => ({ id: `${i}`}))
    return users;
}
 
async function  UserProfile ( { params }: PageProps)  {
    const { id } = await params;

    return (
        <div>
            USER PROFILE: {id}
        </div>
    )
}

export default UserProfile;