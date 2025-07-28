import { ReactNode } from "react";
const tw = {
    header: "text-4xl italic flex justify-center align-middle",
    base: "border-10 border-dotted border-green-200 p-4",
}
const Layout = async ({ useCache, client,  forceDynamic, children  }: { forceDynamic:ReactNode, client:ReactNode, useCache: ReactNode, children: ReactNode }) => {
    return <div className={tw.base} >
        <h2 className={tw.header}>Layout</h2> 
        <br/>
       {useCache}
        <br/>
       {client}
        <br/>
        {forceDynamic}
        <br/>
       {children}
    </div>
}


export default Layout;