import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    Link as ChLink,
    useColorModeValue,
} from '@chakra-ui/react';

import { skills } from '../assets/data/skills';
import { SectionHeading, Skill } from "../components";

export default function About() {
  return (
    <Container maxW={"7xl"} py={12} as="section" fontFamily="SuisseIntlRegular">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <SectionHeading title="About Me" />
          <Heading>Batuhan Faik</Heading>
          <Text
            fontFamily="SuisseIntlRegular"
            color={"gray.500"}
            fontSize={"md"}
            lineHeight={"150%"}
          >
            Hello! My name is Batuhan and I enjoy creating things that live on
            the internet. My love for computer and Internet was from chilhood.
            <br />
            <br />
            My interest in web development started back in 2019, When the
            pandemic hit the world really bad, Schools colleges all were off, I
            took that time to finally go for the career I always wanted. Turns
            out JavaScript became my new love.
            <br /> <br />
            Fast-forward to today, and I’ve had the privilege of working at some
            start-up, My main focus these days is building accessible,
            responsive, secure Web Applications. I also work as a Freelancer at{" "}
            <ChLink
              color={"blue.500"}
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Fiverr.
            </ChLink>
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Text fontSize="sm" fontFamily="SuisseIntlRegular">
              Here are a few technologies I’ve been working with recently:
            </Text>
            <SimpleGrid columns={[1, 2]} gap={4}>
              {skills.map((skill) => (
                <Skill
                  key={skill.key}
                  icon={<Icon as={skill.Icon} color={"white"} w={5} h={5} />}
                  iconBg={skill.color}
                  text={skill.name}
                />
              ))}
            </SimpleGrid>
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"A bad picture of Me"}
            src={"/images/img_avatar.png"}
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
