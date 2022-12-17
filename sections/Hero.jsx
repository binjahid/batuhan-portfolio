import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    Icon,
    useColorModeValue,
    createIcon,
    Link as ChLink,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

import Link from "next/link";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
      }}
    >
      <Container maxW={"3xl"} minH={"100%"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{
              base: "6xl",
              md: "6xl",
              lg: "8xl",
            }}
            lineHeight={"120%"}
            fontFamily="SuisseIntlSemiBold"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Hi,There
            </motion.span>{" "}
            <br />
            <Text as={"span"} color="teal.400">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                I’m Batuhan Faik
              </motion.span>
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            <motion.span
              transition={{
                duration: 0.5,
              }}
            >
              I’m a Web Developer specializing in building (and occasionally
              designing) exceptional digital experiences. Currently, I’m focused
              on building fast, responsive, and secure web applications.
              <br />
              Also working as a Freelancer at{" "}
              <ChLink
                color={"blue.300"}
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                Fiverr
              </ChLink>
            </motion.span>
          </Text>
          <Stack
            direction={{
              base: "column",
              md: "row",
            }}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
              // colorScheme={"blue"}
              bg={"teal.400"}
              color={"white"}
              rounded={"full"}
              border={"1px solid"}
              borderColor={"teal.400"}
              px={6}
              size="lg"
              transition={"all .4s ease"}
              _hover={{ bg: "transparent", color: "teal.400" }}
            >
              <Link href="/about" scroll={false}>
                <a>About Me</a>
              </Link>
            </Button>
            <Button
              // colorScheme={"blue"}
              bg={"transparent"}
              color={"teal.400"}
              rounded={"full"}
              border={"1px solid"}
              borderColor={"teal.400"}
              px={6}
              size="lg"
              transition={"all .4s ease"}
              _hover={{ bg: "teal.400", color: "white" }}
            >
              <Link href="/projects" scroll={false}>
                <a>explore projects</a>
              </Link>
            </Button>
            {/* <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
              <Link href="/about" scroll={false}>
                <a>Learn more about me</a>
              </Link>
            </Button> */}
          </Stack>
        </Stack>
      </Container>
    </section>
  );
}
