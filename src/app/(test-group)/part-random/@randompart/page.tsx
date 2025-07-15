import { getServerRandom } from "./action"

const Page = async () => {

    const random = await getServerRandom();

    return <div style={{ border: '2px solid blue'}}>
        math Random: {random}
    </div>
}


export default Page;
