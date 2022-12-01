import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { works } from "../../assets/data/works";
import { educations } from "../../assets/data/educations";
import About from "../../sections/AboutMe";
import CTA from "../../sections/CTA";
import Educations from "../../sections/Educations";
import SkillsSection from "../../sections/SkillsSection";

import Work from "../../sections/Work";
import AwardsAndCertifications from "../../sections/AwardsAndCertifications";
import Languages from "../../sections/Languages";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About &mdash; Batuhan</title>
      </Head>

      <Box maxW="8xl" m="auto">
        <About />

        <Work works={works} />

        <Educations educations={educations} />
        <AwardsAndCertifications />
        <Languages />
        <SkillsSection />
        <CTA />
      </Box>
    </>
  );
};

export default AboutPage;
