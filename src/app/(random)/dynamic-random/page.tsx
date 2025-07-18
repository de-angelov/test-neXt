
export const dynamic = 'force-dynamic'

const Page = async () => {
    const random = Math.random();

      // simulate async call
    await new Promise((r) => setTimeout(r, 10000));
    
    
    return <div>
        math Random: {random}
    </div>
}

export default Page;