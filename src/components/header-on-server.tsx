import Link from "next/link";
import "server-only";

const tw = {
  container: "relative p-5 bg-cyan-200 flex flex-col min-h-5 w-full drop-shadow-md drop-shadow-red-950 z-40",
  nav: "flex min-h-5 w-full",
  button: "bg-cyan-300 border rounded-sm inline-block p-2 m-1 hover:inner hover:bg-white drop-shadow-md drop-shadow-gray-500"
};

export const Nav = () => {
  return (
    <div className={tw.container}> 
      <span>Runs on Server Only</span>
      <nav className={tw.nav}>
        <Link className={tw.button} href="/action-random">Action - Random</Link>
        <Link className={tw.button} href="/dynamic-random">Dynamic - Random</Link>
        <Link className={tw.button} href="/cashed-random">Cashed - Random</Link>
        <Link className={tw.button} href="/part-random">Part - Random</Link>
        <Link className={tw.button} href="/go-profile">Go - Profile</Link>
        <Link className={tw.button} href="/google" prefetch={false}>Go - /google Redirect from config</Link>
        <Link className={tw.button} href="/never" prefetch={false}>Go - /never Redirect from middleware</Link>
      </nav>
    </div>
  );
};