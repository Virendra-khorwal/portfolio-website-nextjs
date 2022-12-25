import Link from "next/link";

const Navbar = () => {
  // 
  //  
  return (
    <nav className="text-white flex p-4 justify-between font-roboto sticky z-50 top-2 bg-lightBlack rounded-sm shadow-2xl shadow-indigo-500/10">
      <ul className="flex gap-24">
        <li className="hover:text-yellow3">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:text-yellow3">
          <Link href="/projects">Projects</Link>
        </li>
        <li className="hover:text-yellow3">
          <Link href="/contact">Contact</Link>
        </li>
        <li className="hover:text-yellow3">
          <Link href="/linktree">Link Tree</Link>
        </li>
      </ul>
      <h1 className="bg-clip-text text-transparent  bg-gradient-to-r from-yellow3 to-red1 font-bold">
        <Link href="/">Virendra Khorwal</Link>
      </h1>
    </nav>
  );
}

export default Navbar;