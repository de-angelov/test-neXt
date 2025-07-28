import { ReactNode } from "react"

const LoadingContainer = ({ children}: { children: ReactNode}) => {
    return  <div className={'p-5 bg-sky-200 flex w-full animate-pulse'}>LOADING {`|||`} {children}</div> ;
}


export { LoadingContainer };