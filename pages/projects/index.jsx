import Head from 'next/head';
import { Box } from "@chakra-ui/react";

import ProjectsHero from "../../sections/ProjectsHero";
import MoreProjects from "../../sections/MoreProjects";
import ProjectsCTA from "../../sections/ProjectsCTA";

import { moreProjects } from "../../assets/data/moreProjects";

const ProjectPage = () => {
  return (
    <>
      <Head>
        <title>Projects &mdash; Batuhan</title>
      </Head>

      <Box maxW="8xl" m="auto">
        <ProjectsHero />
        <MoreProjects moreProjects={moreProjects} />
        <ProjectsCTA />
      </Box>
    </>
  );
};

export default ProjectPage;

