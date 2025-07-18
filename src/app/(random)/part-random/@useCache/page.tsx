import { cacheLife } from "next/dist/server/use-cache/cache-life";
import { getServerRandom } from "./action"

const Page = async () => {
    "use cache"
    cacheLife("hours");

    const random = await getServerRandom();

    return <div style={{ border: '2px solid blue'}}>
        {`cacheLife("hours")`}
        <br />
        {`stale | revalidate  | expire`}	
         <br />
        {`5 minutes	1 hour	1 day`}
        <br />
        math Random: {random}
    </div>
}


export default Page;
