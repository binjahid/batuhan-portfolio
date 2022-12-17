import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";
import { FcBriefcase } from "react-icons/fc";
import { SectionHeading, WorkExpDetails } from "../components";

export default function Work({ works }) {
  return (
    <Container maxW="7xl" my={8} as="section">
      <Flex justifyContent="center" alignItems="center">
        <Box py={12} bg={useColorModeValue("white", "gray.800")} rounded="xl">
          <Box maxW="7xl" mx="auto" px={{ base: 4, lg: 8 }}>
            <Box textAlign={{ lg: "center" }}>
              <SectionHeading title="Work Experience" />
              <chakra.p
                my={4}
                fontSize={{ base: "3xl", sm: "4xl" }}
                lineHeight="9"
                fontWeight="bold"
                letterSpacing="tight"
                color={useColorModeValue("gray.900")}
                fontFamily="SuisseIntlBold"
              >
                I’ve worked at some start-up and Freelancer Platforms
              </chakra.p>
            </Box>

            <Box mt={10}>
              <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={4}
                gridColumnGap={{ md: 8 }}
                gridRowGap={{ md: 10 }}
              >
                {works.map((work) => (
                  <WorkExpDetails
                    title={work.title}
                    link={work.url}
                    icon={<FcBriefcase size="1.5rem" />}
                    key={work.id}
                    startDate={work.joinedDate}
                    endDate={work.leftDate}
                    types={work.type}
                    skills={work.skills}
                  >
                    {work.description}
                  </WorkExpDetails>
                ))}
              </SimpleGrid>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
