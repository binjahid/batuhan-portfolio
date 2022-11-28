import { Center, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Fallback } from "../../components";
import ProjectDetailDesc from "../../sections/ProjectDetailsDesc";
import ProjectDetailsHero from "../../sections/ProjectDetailsHero";
import ProjectDetailsImg from "../../sections/ProjectDetailsImg";

import { detailedProjects } from "../../assets/data/projects";

const ProjectDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const project = detailedProjects.find((project) => project.slug === slug);

  if (!project) {
    return <Fallback />;
  }

  return (
    <>
      <ProjectDetailsHero
        bg={project.cover.url}
        title={project.title}
        links={project.links}
      />
      <ProjectDetailDesc
        started={project.started}
        types={project.type}
        duration={project.duration}
        language={project.language}
        category={project.category.title}
        skills={project.skills}
        description={project.description}
        client={project.client}
        reviews={project.reviews}
      />
      <ProjectDetailsImg images={project.images} />

      <Center py={10}>
        <Button
          size="lg"
          variant="link"
          onClick={() => router.push("/projects")}
        >
          See more projects
        </Button>
      </Center>
    </>
  );
};

export default ProjectDetailPage;
