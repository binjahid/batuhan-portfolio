import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from "react";

import {
  Box,
  HStack,
  Flex,
  IconButton,
  useColorModeValue,
  useDisclosure,
  CloseButton,
  VStack,
  Button,
  useColorMode,
  Fade,
  Text,
} from "@chakra-ui/react";
import { useViewportScroll } from "framer-motion";

import { AiOutlineMenu } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { FcDocument } from "react-icons/fc";

import { navLinks } from "../assets/data/navlinks";

export default function Navbar() {
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const bg = useColorModeValue("white", "gray.800");
  const ref = useRef();
  const [y, setY] = useState(0);
  const { height = 0 } = ref.current ? ref.current.getBoundingClientRect() : {};

  const { scrollY } = useViewportScroll();
  useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);
  const cl = useColorModeValue("gray.800", "white");
  const mobileNav = useDisclosure();

  const router = useRouter();

  const downloadResume = () => {
    const resumeLink = "/resume.pdf";
    window.open(resumeLink, "_blank");
  };

  const MobileNavContent = (
    <Fade in={mobileNav.isOpen}>
      <VStack
        zIndex={1000}
        pos="absolute"
        top={0}
        left={0}
        right={0}
        display={mobileNav.isOpen ? "flex" : "none"}
        flexDirection="column"
        p={2}
        pb={4}
        m={2}
        bg={bg}
        spacing={3}
        rounded="sm"
        shadow="sm"
      >
        <CloseButton
          aria-label="Close menu"
          justifySelf="self-start"
          onClick={mobileNav.onClose}
        />
        {navLinks.map((item) => (
          <Button
            w="full"
            variant="ghost"
            leftIcon={item.Icon}
            key={item.id}
            onClick={mobileNav.onClose}
          >
            <Link scroll={false} fontFamily="SuisseIntlRegular" href={item.url}>
              {item.name}
            </Link>
          </Button>
        ))}
        <Button
          w="full"
          onClick={downloadResume}
          color={text}
          leftIcon={<FcDocument />}
        >
          Resume
        </Button>
      </VStack>
    </Fade>
  );
  return (
    <Box
      ref={ref}
      shadow={y > height ? "sm" : undefined}
      transition="box-shadow 0.2s"
      bg={bg}
      borderTop="6px solid"
      borderTopColor="brand.400"
      w="full"
      overflowY="hidden"
      borderBottomWidth={2}
      borderBottomColor={useColorModeValue("gray.200", "gray.900")}
    >
      <Box h="4.5rem" mx="auto" maxW="8xl">
        <Flex
          w="full"
          h="full"
          px="6"
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex align="flex-start">
            <Link href="/" passHref scroll={false}>
              <Text
                fontFamily="SuisseIntlBold"
                fontWeight="bold"
                fontSize={"2xl"}
                display={"flex"}
                alignItems={"center"}
                letterSpacing={"0.1rem"}
                cursor="pointer"
                transitionDuration={"0.5s"}
                _hover={{
                  letterSpacing: "0.3rem",
                }}
              >
                <Text color="teal.400" pr={"0.3rem"}>
                  Batuhan{" "}
                </Text>
                .
              </Text>
            </Link>
          </Flex>
          <Flex justify="flex-end" align="center" color="gray.400">
            <HStack spacing="5" display={{ base: "none", md: "flex" }}>
              {navLinks.map((item) => (
                <Button
                  key={item.id}
                  bg={bg}
                  color={
                    router.pathname === item.url
                      ? useColorModeValue("gray.800", "white")
                      : "gray.500"
                  }
                  fontWeight={router.pathname === item.url ? "bold" : "medium"}
                  display="inline-flex"
                  alignItems="center"
                  fontSize="md"
                  _hover={{ color: cl }}
                  _focus={{ boxShadow: "none" }}
                  onClick={() => router.push(item.url)}
                >
                  <Link scroll={false} href={item.url}>
                    {item.name}
                  </Link>
                </Button>
              ))}
              <Button
                display="inline-flex"
                alignItems="center"
                fontSize="md"
                bg={"teal.400"}
                color={"white"}
                _focus={{ boxShadow: "none" }}
                _hover={{ bg: "teal.500", animationDuration: "0.5s" }}
                onClick={downloadResume}
              >
                Resume
              </Button>
            </HStack>
            <IconButton
              size="md"
              fontSize="lg"
              aria-label={`Switch to ${text} mode`}
              variant="ghost"
              color="current"
              ml={{ base: "0", md: "3" }}
              onClick={toggleMode}
              icon={<SwitchIcon />}
            />
            <IconButton
              display={{ base: "flex", md: "none" }}
              aria-label="Open menu"
              fontSize="20px"
              color={useColorModeValue("gray.800", "inherit")}
              variant="ghost"
              icon={<AiOutlineMenu />}
              onClick={mobileNav.onOpen}
            />
          </Flex>
        </Flex>
        {MobileNavContent}
      </Box>
    </Box>
  );
}
