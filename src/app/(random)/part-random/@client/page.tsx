import { ReadyContainer } from "@jobber/components/ready-container";
import { getServerRandom } from "./action"

const Page = async () => {
   "use client";
    const random = await getServerRandom();

    return <ReadyContainer>
         use client: this is client side math Random: {random}
    </ReadyContainer>
}


export default Page;
