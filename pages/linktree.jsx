import Head from "next/head";

import behance from "../assets/image/behance.png";
import dribbble from "../assets/image/dribbble.png";
import github from "../assets/image/github.png";
import dev from "../assets/image/dev.png";
import twitter from "../assets/image/twitter.png";
import learnweb3 from "../assets/image/learnweb3.png";
import Image from "next/image";

import {
  DispatchCursor,
  CURSOR_HIDE,
  CURSOR_COLOR,
  CURSOR_TEXT,

} from "haspr-cursor";
import Link from "next/link";

const LinkTree = () => {
  const dispatch = DispatchCursor();
  const Links = [
    {
      title: "Github",
      link: "https://github.com/Virendra-khorwal",
      logo: github,
      color: "bg-yellow1",
    },
    {
      title: "Dev.to",
      link: "https://dev.to/virendrakhorwal",
      logo: dev,
    },
    {
      title: "LearnWeb3 DAO",
      link: "https://learnweb3.io/profiles/virendrakhorwaldev",
      logo: learnweb3,
    },
    {
      title: "Behance",
      link: "https://www.behance.net/virendrakhorwaldev",
      logo: behance,
    },
    {
      title: "Dribbble",
      link: "https://dribbble.com/virendrakhorwaldev",
      logo: dribbble,
    },
    {
      title: "Twitter",
      link: "https://twitter.com/VirendraKhorwal",
      logo: twitter,
    },
  ];

  return (
    <>
      <Head>
        <title>Link Tree | Virendra</title>
      </Head>
      <main
        onMouseEnter={() => CURSOR_COLOR("RED")}
        onMouseLeave={CURSOR_HIDE}
        className="text-white flex flex-col items-center gap-y-8"
      >
        <h1 className="mt-10 text-3xl bg-clip-text text-transparent  bg-gradient-to-r from-blue1 to-red font-roboto">
          Link Tree
        </h1>
        <div className="w-full flex flex-col gap-4 sm:items-stretch items-center">
          {Links.map((link) => (
            <div
              key={link.link}
              onMouseEnter={() =>
                CURSOR_TEXT(dispatch, `Visit ${link.title} Profile`, "RED")
              }
              onMouseLeave={() => CURSOR_TEXT(dispatch, "END")}
              className="flex w-96 sm:w-auto sm:p-2 gap-4 rounded-sm p-4 items-center
              bg-orange-300 hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              <Image className="w-10 h-10 sm:w-8 sm:h-8" src={link.logo} alt={link.title} />
              <h1 className="text-darkBlack text-lg sm:text-sm">
                <Link className="cursor-none" target="_blank" href={link.link}>
                  {link.title} | Virendra Khorwal
                </Link>
              </h1>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default LinkTree;
