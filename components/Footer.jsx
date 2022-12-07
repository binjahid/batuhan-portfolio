import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import Link from "next/link";
import { socialLinks } from "../assets/data/footerSocial";

const SocialButton = ({ children, label, href, color }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      color={useColorModeValue("blackAlpha.900", "whiteAlpha.900")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      target={"_blank"}
      rel={"noopener noreferrer"}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: color,
        color: useColorModeValue("whiteAlpha.900", "whiteAlpha.900"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.200", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Box width={"8rem"}>
          <Link scroll={false} href="/">
            <Text
              fontFamily="SuisseIntl"
              fontWeight="bold"
              fontSize={"2xl"}
              display={"flex"}
              alignItems={"center"}
              letterSpacing={"0.2rem"}
              cursor="pointer"
              transitionDuration={"0.5s"}
              _hover={{
                letterSpacing: "0.1rem",
              }}
            >
              <Text color="teal.400" pr={"0.3rem"}>
                Batuhan{" "}
              </Text>
              .
            </Text>
          </Link>
        </Box>
        <Text fontSize="sm" fontFamily="'Open Sans', sans-serif">
          &copy; {new Date().getFullYear()} &nbsp; Batuhan Faik
        </Text>
        <Stack direction={"row"} spacing={6}>
          {socialLinks.map((item) => (
            <SocialButton
              key={item.id}
              label={item.name}
              href={item.url}
              color={item.color}
            >
              {item.Icon}
            </SocialButton>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
