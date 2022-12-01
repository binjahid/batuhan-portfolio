import {
  Box,
  Container,
  Flex,
  Stack,
  Tag,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import languages from "../assets/data/languages";
import { SectionHeading } from "../components";

export default function Languages() {
  return (
    <Container maxW="7xl" my={8} as="section">
      <Box py={12} bg={useColorModeValue("white", "gray.800")} rounded="xl">
        <Box mx="auto">
          <Box textAlign={{ lg: "center" }}>
            <SectionHeading title="Languages" />
          </Box>
        </Box>
        <Stack isInline wrap="wrap" align="center" p={"1rem"} spacing={4}>
          {languages.map((language) => (
            <Tag size="lg" colorScheme="teal" variant="solid">
              {language.name}
            </Tag>
          ))}
        </Stack>
      </Box>
    </Container>
  );
}
