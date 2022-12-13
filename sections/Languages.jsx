import {
  Box,
  Container,
  Stack,
  Tag,
  useColorModeValue,
  Progress,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";
import languages from "../assets/data/languages";
import { SectionHeading } from "../components";

export default function Languages() {
  return (
    <Container maxW="7xl" my={8} as="section">
      <Box py={12} bg={useColorModeValue("white", "gray.800")} rounded="xl">
        <Box mx="auto" pb={6}>
          <Box textAlign={{ lg: "center" }}>
            <SectionHeading title="Languages" />
          </Box>
        </Box>
        {/* {languages.map((language) => (
            <Tag size="lg" colorScheme="teal" variant="solid">
              {language.name}
            </Tag>
          ))} */}
        <Stack
          maxW={{
            base: "90%",
            md: "80%",
          }}
          mx={"auto"}
          spacing={3}
        >
          {languages.map((language) => (
            <Flex alignItems={"center"} w="100%">
              <Text fontWeight={"medium"} fontSize="lg" mr={3} width="6rem">
                {language.name}
              </Text>
              <Box w={"100%"}>
                <Progress
                  size="xs"
                  colorScheme={useColorModeValue(language.color, "gray")}
                  value={language.percent}
                  height="15px"
                  borderRadius="lg"
                />
              </Box>
            </Flex>
          ))}
        </Stack>
      </Box>
    </Container>
  );
}
