import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  DispatchCursor,
  CURSOR_SHOW,
  CURSOR_HIDE,
  CURSOR_COLOR,
  CURSOR_TEXT,
  CURSOR_EXCLUSION,
  CURSOR_STICKY,
  CURSOR_MAGNETIC,
  CURSOR_VIDEO,
  CURSOR_REVEAL,
  CURSOR_UNDERLINE,
} from "haspr-cursor";

const PorjectCard = ({project}) => {
    // console.log(project)
    const dispatch = DispatchCursor();
    let ImgUrl = `https://raw.githubusercontent.com/Virendra-khorwal/${project.name}/${project.default_branch}/homepage.png`;
    // console.log(ImgUrl)
    return (
      <motion.div
        onMouseEnter={() => CURSOR_TEXT(dispatch, "Visit Project Repo", "RED")}
        onMouseLeave={() => CURSOR_TEXT(dispatch, "END")}
        className="h-full flex flex-col p-8 bg-lightBlack rounded-sm items-center gap-y-8 sm:gap-y-2 sm:p-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5, }}
        variants={{
          hidden: {
            opacity: 0,
            scale:0,
          },
          visible: {
            opacity: 1,
            scale: 1,
          },
        }}
      >
        <h1 className="text-white font-pt sm:text-sm">{project.name}</h1>
        <Image
          width={1200}
          height={1000}
          className="w-auto h-auto overflow-hidden rounded-sm"
          src={ImgUrl}
          alt={project.name}
        />
      </motion.div>
    );
}

export default PorjectCard