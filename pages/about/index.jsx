import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { works } from "../../assets/data/works";
import About from "../../sections/AboutMe";
import CTA from "../../sections/CTA";
import SkillsSection from "../../sections/SkillsSection";

import Work from "../../sections/Work";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About &mdash; Batuhan</title>
      </Head>

      <Box maxW="8xl" m="auto">
        <About />

        <Work works={works} />

        <SkillsSection />
        <CTA />
      </Box>
    </>
  );
};

export default AboutPage;
