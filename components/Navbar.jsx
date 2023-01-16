import Link from "next/link";
import { useRouter } from "next/router";

import { DispatchCursor, CURSOR_HIDE, CURSOR_COLOR } from "haspr-cursor";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const dispatch = DispatchCursor();
  const router = useRouter()

  const [toggleMenu, setToggleMenu] = useState(false)

  const onToggleHandler = () => setToggleMenu((prevState) => !prevState)


  return (
    <nav
      onMouseEnter={() => CURSOR_COLOR("RED")}
      onMouseLeave={CURSOR_HIDE}
      className="text-white flex p-4 justify-between font-roboto sticky z-50 top-2 bg-lightBlack rounded-sm shadow-2xl shadow-indigo-500/10 items-center"
    >
      <ul className="flex gap-24 lg:gap-12 md:hidden">
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
      {/* mobile nav */}
      <button onClick={onToggleHandler} className="relative hover:text-yellow1 text-xl hidden md:flex">
        <IoMenu />
      </button>
      {toggleMenu && (
        <div className="flex absolute bg-lightBlack w-full top-20 left-0 rounded-sm transition-all ease-in-out">
          <ul className="flex flex-col gap-4 p-4">
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
        </div>
      )}

      <h1 className="bg-clip-text text-transparent  bg-gradient-to-r from-yellow3 to-red1 font-bold">
        <Link className="cursor-none" href="/">
          Virendra Khorwal
        </Link>
      </h1>
    </nav>
  );
}

export default Navbar;