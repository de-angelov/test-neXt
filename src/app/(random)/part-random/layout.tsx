import { ReactNode } from "react";

const Layout = async ({ useCache, client,  forceDynamic, children  }: { forceDynamic:ReactNode, client:ReactNode, useCache: ReactNode, children: ReactNode }) => {
    return <div style={{ border: '3px solid green', padding: '10px' }} >
        <h2>Layout</h2> 
        <br/>
       {useCache}
        <br/>
        <br/>
       {client}
        <br/>
        {forceDynamic}
        <br/>
        <br/>
       {children}
    </div>
}


export default Layout;