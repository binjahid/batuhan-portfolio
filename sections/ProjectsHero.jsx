import { Box, useColorModeValue, Text, Heading } from "@chakra-ui/react";

const ProjectsHero = () => {
  return (
    <Box px={8} py={24} mx="auto" as="section">
      <Box
        w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
        mx="auto"
        textAlign={"center"}
      >
        <Heading
          mb={6}
          fontSize={{ base: "4xl", md: "6xl" }}
          fontWeight="bold"
          lineHeight="none"
          letterSpacing={{ base: "normal", md: "tight" }}
          color={useColorModeValue("gray.900", "gray.100")}
          fontFamily="SuisseIntl"
        >
          All of my{" "}
          <Text
            display={{ base: "block", lg: "inline" }}
            w="full"
            bgClip="text"
            bgGradient="linear(to-r, blue.400, red.500)"
            fontWeight="extrabold"
          >
            Previous Projects
          </Text>{" "}
          in one single place.
        </Heading>
        <Text
          px={{ base: 0, lg: 24 }}
          mb={6}
          fontSize={{ base: "lg", md: "xl" }}
          color={useColorModeValue("gray.600", "gray.300")}
        >
          Great projects are built with love of the developers. Here you can
          find all of my previous projects, and the technologies that I used to
          build them. Also my current work in progress.
        </Text>
      </Box>
    </Box>
  );
};

export default ProjectsHero;
