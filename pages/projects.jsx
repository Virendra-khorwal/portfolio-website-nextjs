import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import loadingAnimation from "../assets/loading.json";

import PorjectCard from "../components/ProjectCard";

import {
  DispatchCursor,
  CURSOR_HIDE,
  CURSOR_COLOR,

} from "haspr-cursor";

const Projects = () => {
  const dispatch = DispatchCursor();
  const [res, setRes] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Virendra-Khorwal/repos?sort=created&per_page=100")
      .then((response) => response.json())
      .then((response) => setRes(response))
      .then((error) => console.error(error));
    setProjects(res.filter((r) => r.topics.includes("portfolio-tag")));
  }, [res]);

  // console.log(projects)

  if(projects.length <= 0 ) {
    return (
      <div className="mt-36">
        <Player className="w-96" src={loadingAnimation} autoplay loop />
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Projects | Virendra Khorwal</title>
      </Head>
      <main onMouseEnter={() => CURSOR_COLOR("RED")} onMouseLeave={CURSOR_HIDE}>
        {projects.map((project) => (
          <section key={project.id} className="h-screen sm:h-full py-20 sm:py-4 md:h-full">
            <Link
              className="cursor-none"
              target="_blank"
              href={project.html_url}
            >
              <PorjectCard project={project} />
            </Link>
          </section>
        ))}
      </main>
    </>
  );
};

export default Projects;
