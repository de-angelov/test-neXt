'use cache'

import { ReadyContainer } from "@jobber/components/ready-container";

const Page = async () => {
    const random = Math.random();
    
    
    return <ReadyContainer>
       use cache: math Random: {random}
    </ReadyContainer>
}

export default Page;