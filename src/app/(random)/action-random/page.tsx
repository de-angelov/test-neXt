import { ReadyContainer } from "@jobber/components/ready-container";
import { getServerRandom } from "./action"

export const revalidate = 10;

const Page = async () => {

    const random = await getServerRandom();

    return <ReadyContainer>
       revalidate = 10: will recalculate every 10 sec:  math Random: {random}
    </ReadyContainer>
}


export default Page;


