import { ReadyContainer } from "@jobber/components/ready-container";

export const dynamic = 'force-dynamic'

const Page = async () => {
    const random = Math.random();

      // simulate async call
    await new Promise((r) => setTimeout(r, 10_000));
    
    
    return <ReadyContainer>
        force-dynamic: math Random: {random}
    </ReadyContainer>
}

export default Page;