import { ReactNode } from "react";

const Layout = async ({ randompart, children  }: { randompart: ReactNode, children: ReactNode }) => {
    return <div style={{ border: '3px solid green', padding: '10px' }} >
        <h2>Layout</h2> 
        <br/>
       {randompart}
        <br/>
       {children}
    </div>
}


export default Layout;