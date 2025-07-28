import { ReadyContainer } from "@jobber/components/ready-container";
import { getServerRandom } from "./action"

export const dynamic = "force-dynamic"; 

const Page = async () => {


    const random = await getServerRandom();

    return <ReadyContainer>
        this is server side but force-dynamic math Random: {random}
    </ReadyContainer>
}


export default Page;
