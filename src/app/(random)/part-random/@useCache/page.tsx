import { cacheLife } from "next/dist/server/use-cache/cache-life";
import { getServerRandom } from "./action"
import { ReadyContainer } from "@jobber/components/ready-container";

const Page = async () => {
    "use cache"
    cacheLife("hours");

    const random = await getServerRandom();

    return <ReadyContainer>
        {`cacheLife("hours")`}
        <br />
        {`stale | revalidate  | expire`}	
         <br />
        {`5 minutes	1 hour	1 day`}
        <br />
        math Random: {random}
    </ReadyContainer>
}


export default Page;
