import Link from "next/link";
import "server-only";

const styleLink = "border border-black inline-block p-5 m-5";
const styleNav = "flex min-h-10 w-full";
// const styleContainer = "border-[11px] border-gray-500 p-10 bg-gray-200 flex flex-col min-h-5 w-full";

const styleContainer = "border-gray-500 p-10 bg-gray-200 flex flex-col min-h-5 w-full";

export const Nav = () => {
    return <div className={styleContainer}> 
        <span>Runs on Server Only</span>
        <nav className={styleNav}>
            <Link className={styleLink} href={'/action-random'}> Action - Random </Link>  
            <Link className={styleLink} href={'/dynamic-random'}> Dynamic - Random </Link>  
            <Link className={styleLink} href={'/cashed-random'}> Cashed - Random </Link>  
            <Link className={styleLink} href={'/part-random'}> Part - Random </Link> 
            <Link className={styleLink} href={'/go-profile'}> Go - Profile </Link>  
            <Link prefetch={false} className={styleLink} href={'/google'}> Go - /google Redirect from config </Link>  
            <Link prefetch={false} className={styleLink} href={'/never'}> Go - /never Redirect from middleware </Link>  
        </nav>
    </div>
};