import { getServerRandom } from "./action"

export const revalidate = 10;

const Page = async () => {

    const random = await getServerRandom();

    return <div>
       will recalculate every 10 sec:  math Random: {random}
    </div>
}


export default Page;


