import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
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
    fetch("https://api.github.com/users/Virendra-Khorwal/repos")
      .then((response) => response.json())
      .then((response) => setRes(response))
      .then((error) => console.error(error));
    setProjects(res.filter((r) => r.topics.includes("portfolio-tag")));
  }, [res]);

  // console.log(projects)

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
