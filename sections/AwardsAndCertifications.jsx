import React from "react";
import {
  Flex,
  Text,
  useColorModeValue,
  Container,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import { FaAward, FaCertificate } from "react-icons/fa";

import awardsData from "../assets/data/awards";
import TimelineRow from "../components/TimelineRow";
import { SectionHeading } from "../components";
import certifications from "../assets/data/certifications";

export default function AwardsAndCertifications() {
  const textColor = useColorModeValue("gray.700", "white.300");
  const bgIconColor = useColorModeValue("white.300", "gray.700");
  const bg = useColorModeValue("gray.50", "gray.700");
  return (
    <Container maxW={"8xl"} my={8} as="section">
      <Flex justifyContent={"center"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={4}
          gridColumnGap={{ md: 8 }}
          gridRowGap={{ md: 10 }}
        >
          <Box p="1rem" maxHeight={"100%"} maxW="7xl">
            <Box pt="0px" p="28px 0px 35px 21px">
              <Flex direction="column">
                <Box textAlign={{ lg: "center" }}>
                  <SectionHeading title="Awards" />
                </Box>
                <Text
                  fontSize="base"
                  color="gray.500"
                  pt={"1.5rem"}
                  fontWeight="normal"
                >
                  I have been fortunate to receive some awards and recognition
                  for my work.
                </Text>
              </Flex>
            </Box>
            <Box ps="26px" pe="0px" mb="31px" position="relative">
              <Flex direction="column">
                {certifications.map((row, index, arr) => {
                  return (
                    <TimelineRow
                      logo={FaAward}
                      title={row.title}
                      description={row.description}
                      date={row.date}
                      color={row.color}
                      index={index}
                      arrLength={arr.length}
                      link={row.link}
                    />
                  );
                })}
              </Flex>
            </Box>
          </Box>
          <Box p="1rem" maxHeight={"100%"} maxW="7xl">
            <Box pt="0px" p="28px 0px 35px 21px">
              <Flex direction="column">
                <Box textAlign={{ lg: "center" }}>
                  <SectionHeading title="Certifications" />
                </Box>
                <Text
                  fontSize="base"
                  color="gray.500"
                  pt={"1.5rem"}
                  fontWeight="normal"
                >
                  The following are some of the certifications I have earned.
                </Text>
              </Flex>
            </Box>
            <Box ps="26px" pe="0px" mb="31px" position="relative">
              <Flex direction="column">
                {awardsData.map((row, index, arr) => {
                  return (
                    <TimelineRow
                      logo={FaCertificate}
                      title={row.title}
                      description={row.description}
                      date={row.date}
                      color={row.color}
                      index={index}
                      arrLength={arr.length}
                      link={row.link}
                    />
                  );
                })}
              </Flex>
            </Box>
          </Box>
        </SimpleGrid>
      </Flex>
    </Container>
  );
}
