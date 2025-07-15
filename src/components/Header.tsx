import Link from "next/link";
import "server-only";

const styleLink = { border: '1px solid black', display: 'inline-block', padding: '5px', margin: '5px' };

export const Header = () => {
    return <div style={{ border: '11px solid grey', padding: '40px',  backgroundColor: 'lightgrey' , display: 'flex', height: '100px', width: '100%'}}> 
        <span>Runs server Only {"              "}</span>
        <nav>
            <Link style={styleLink} href={'/action-random'}> Action - Random </Link>  
            <Link style={styleLink} href={'/cashed-random'}> Cashed - Random </Link>  
            <Link style={styleLink} href={'/part-random'}> Part - Random </Link> 
            <Link style={styleLink} href={'/go-profile'}> Go - Profile </Link>  
        </nav>
    </div>
};