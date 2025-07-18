import { getServerRandom } from "./action"

const Page = async () => {
   "use client";
    const random = await getServerRandom();

    return <div style={{ border: '2px solid blue'}}>

        <br />
         this is client side math Random: {random}
    </div>
}


export default Page;
