import Link from "next/link";
import { CSSProperties } from "react";
import "server-only";

const styleLink = { border: '1px solid black', display: 'inline-block', padding: '5px', margin: '5px' };
const styleNav= { display: 'flex', minHeight: '20px', width: '100%'};
const styleContainer:CSSProperties = { border: '11px solid grey', padding: '40px',  backgroundColor: 'lightgrey' , flexDirection: 'column', display: 'flex', minHeight: '5px', width: '100%'};

export const Header = () => {
    return <div style={styleContainer}> 
        <span>Runs server Only</span>
        <nav style={styleNav}>
            <Link style={styleLink} href={'/action-random'}> Action - Random </Link>  
            <Link style={styleLink} href={'/dynamic-random'}> Dynamic - Random </Link>  
            <Link style={styleLink} href={'/cashed-random'}> Cashed - Random </Link>  
            <Link style={styleLink} href={'/part-random'}> Part - Random </Link> 
            <Link style={styleLink} href={'/go-profile'}> Go - Profile </Link>  
            <Link prefetch={false} style={styleLink} href={'/google'}> Go - /google Redirect from config </Link>  
            <Link prefetch={false} style={styleLink} href={'/never'}> Go - /never Redirect from middleware </Link>  
        </nav>
    </div>
};