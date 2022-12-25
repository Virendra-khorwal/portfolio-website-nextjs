import Head from "next/head";
import Image from "next/image";
import {
  DispatchCursor,
  CURSOR_SHOW,
  CURSOR_HIDE,
  CURSOR_COLOR,
  CURSOR_TEXT,
  CURSOR_EXCLUSION,
  CURSOR_STICKY,
  CURSOR_MAGNETIC,
  CURSOR_REVEAL,
  CURSOR_UNDERLINE,
} from "haspr-cursor";

import img from '../assets/image/avatar2.png'
import Link from "next/link";

const About = () => {
    const dispatch = DispatchCursor();
    return (
      <>
        <Head>
          <title>About | Virendra Khorwal</title>
        </Head>
        <main className="flex flex-col items-center gap-y-8">
          <h1 className="mt-10 text-3xl bg-clip-text text-transparent  bg-gradient-to-r from-blue1 to-red font-roboto font-bold">
            About me
          </h1>
          <div
            onMouseEnter={() => CURSOR_EXCLUSION(dispatch, "START", "LARGE")}
            onMouseLeave={() => CURSOR_EXCLUSION(dispatch, "END")}
            className="bg-lightBlack rounded-sm flex w-5/6 justify-around p-8 items-center"
          >
            <p className="text-white font-pt w-3/6">
              Student, Web Developer, App Developer, UI designer. I have 3+
              years of experience in web development and UI designing 1 year of
              experience in app development. Learning web3 dev with{" "}
              <Link
                className="text-yellow1 hover:border-b-2 pb-1 hover:border-yellow1 transition-all ease-in-out"
                href="https://learnweb3.io/"
              >
                @LearnWeb3 DAO.
              </Link>
              Looking for projects or collaboration,{" "}
              <Link
                className="text-red1 hover:border-b-2 pb-1 hover:border-red1 transition-all ease-in-out"
                href="/contact"
              >
                Connect with me.
              </Link>{" "}
              Also catch up with me on other{" "}
              <Link
                className="text-yellow1 hover:border-b-2 pb-1 hover:border-yellow1 transition-all ease-in-out"
                href="/linktree"
              >
                platforms
              </Link>
            </p>
            <Image
              className="w-56 rounded-sm"
              src={img}
              alt="Virendra Khorwal"
            />
          </div>
        </main>
      </>
    );
}

export default About;