import { getServerRandom } from "./action"

export const dynamic = "force-dynamic"; 

const Page = async () => {


    const random = await getServerRandom();

    return <div style={{ border: '2px solid blue'}}>
        
        <br />
        this is server side but force-dynamic math Random: {random}
    </div>
}


export default Page;
