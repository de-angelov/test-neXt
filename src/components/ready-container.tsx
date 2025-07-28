import { ReactNode } from "react"

const ReadyContainer = ({ children}: { children: ReactNode}) => {
    return  <div className={'p-5 bg-emerald-200 rounded-2xl w-full flex justify-center align-middle'}> {children}</div> ;
}


export { ReadyContainer };