import {
  Box,
  Flex,
  useColorModeValue,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";
import { FaBookOpen } from "react-icons/fa";
import { SectionHeading, WorkExpDetails } from "../components";

export default function Educations({ educations }) {
  return (
    <Container maxW="7xl" my={8} as="section">
      <Flex justifyContent="center" alignItems="center">
        <Box py={12} bg={useColorModeValue("white", "gray.800")} rounded="xl">
          <Box maxW="7xl" mx="auto" px={{ base: 4, lg: 8 }}>
            <Box textAlign={{ lg: "center" }}>
              <SectionHeading title="Educations" />
            </Box>

            <Box mt={10}>
              <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={4}
                gridColumnGap={{ md: 8 }}
                gridRowGap={{ md: 10 }}
              >
                {educations.map((education) => (
                  <WorkExpDetails
                    title={education.title}
                    link={education.url}
                    icon={<FaBookOpen color="#FF6E40" size="1.5rem" />}
                    key={education.id}
                    startDate={education.joinedDate}
                    endDate={education.leftDate}
                    types={education.type}
                    skills={education.skills}
                    degree={education.degree}
                  >
                    {education.description}
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
