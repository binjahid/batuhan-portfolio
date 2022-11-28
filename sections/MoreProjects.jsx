import { Container, SimpleGrid, Center, Button } from '@chakra-ui/react';
import { HeadingBB, ProjectCardSm } from '../components';
import { backgrounds } from "../assets/data/backgroundsGradient";

const MoreProjects = ({ moreProjects }) => {
  const randomNumber = () => {
    // return a random number from 1-4
    return Math.floor(Math.random() * 4);
  };

  return (
    <Container
      maxW="7xl"
      as="section"
      py={10}
      id="more-works"
      position={"relative"}
      _after={{
        content: '""',
        position: "absolute",
        zIndex: "-1",
        height: "full",
        width: "full",
        filter: "blur(45px)",
        transform: "scale(0.5)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: backgrounds[randomNumber()],
      }}
    >
      {/* <HeadingBB text='More' coloredText='Projects' /> */}
      <SimpleGrid columns={[1, 1, 2, 3]} spacing={5}>
        {moreProjects.map((project) => (
          <ProjectCardSm key={project.slug} project={project} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default MoreProjects;
