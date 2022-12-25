import Link from "next/link";
import { useRouter } from "next/router";

import { DispatchCursor, CURSOR_HIDE, CURSOR_COLOR } from "haspr-cursor";

const Navbar = () => {
  const dispatch = DispatchCursor();
  const router = useRouter()
  console.log(router)

  return (
    <nav
      onMouseEnter={() => CURSOR_COLOR("RED")}
      onMouseLeave={CURSOR_HIDE}
      className="text-white flex p-4 justify-between font-roboto sticky z-50 top-2 bg-lightBlack rounded-sm shadow-2xl shadow-indigo-500/10"
    >
      <ul className="flex gap-24">
        <li
          className={`hover:text-yellow3 ${
            router.pathname === "/about" && "text-yellow3"
          }`}
        >
          <Link className="cursor-none" href="/about">
            About
          </Link>
        </li>
        <li
          className={`hover:text-yellow3 ${
            router.pathname === "/projects" && "text-yellow3"
          }`}
        >
          <Link className="cursor-none" href="/projects">
            Projects
          </Link>
        </li>
        <li
          className={`hover:text-yellow3 ${
            router.pathname === "/contact" && "text-yellow3"
          }`}
        >
          <Link className="cursor-none" href="/contact">
            Contact
          </Link>
        </li>
        <li
          className={`hover:text-yellow3 ${
            router.pathname === "/linktree" && "text-yellow3"
          }`}
        >
          <Link className="cursor-none" href="/linktree">
            Link Tree
          </Link>
        </li>
      </ul>
      <h1 className="bg-clip-text text-transparent  bg-gradient-to-r from-yellow3 to-red1 font-bold">
        <Link className="cursor-none" href="/">
          Virendra Khorwal
        </Link>
      </h1>
    </nav>
  );
}

export default Navbar;