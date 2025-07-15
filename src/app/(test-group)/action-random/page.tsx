import { getServerRandom } from "./action"

const Page = async () => {

    const random = await getServerRandom();

    return <div>
        math Random: {random}
    </div>
}


export default Page;


