import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Icon,
  Stack,
  Link,
  Text,
  Tag,
} from "@chakra-ui/react";
import moment from "moment";

const WorkExpDetails = (props) => {
  const start = moment(props.startDate).format("MMM YYYY");
  const end = props.endDate
    ? moment(props.endDate).format("MMM YYYY")
    : "Present";

  const date = `${start} - ${end}`;

  return (
    <Flex
      flexDirection={{
        base: "column",
        md: "row",
      }}
      fontFamily="SuisseIntlRegular"
    >
      <Flex>
        <Flex
          alignItems="center"
          justifyContent="center"
          h={12}
          w={12}
          rounded="md"
          bg={useColorModeValue("brand.500")}
          color="white"
        >
          <Icon
            boxSize={6}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            {props.icon}
          </Icon>
        </Flex>
      </Flex>
      <Box ml={4}>
        <Flex justify="space-between" mb={3}>
          <chakra.dt fontSize="lg" fontWeight="medium" lineHeight="6">
            <Link
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
              color="blue.400"
            >
              <a>{props.title}</a>
            </Link>
          </chakra.dt>

          {props.types && (
            <Tag colorScheme="green" textTransform="capitalize">
              {props.types.join(" / ")}
            </Tag>
          )}
        </Flex>
        <Text
          fontSize="sm"
          fontFamily="SuisseIntlRegular"
          color={useColorModeValue("gray.500")}
          lineHeight="100%"
        >
          {props.degree}
        </Text>
        <Text
          pt={"0.5rem"}
          fontSize="sm"
          fontFamily="SuisseIntlRegular"
          color={useColorModeValue("gray.500")}
          lineHeight="100%"
        >
          {date}
        </Text>
        <chakra.dd
          mt={2}
          color={useColorModeValue("gray.500", "gray.400")}
          lineHeight="1.4"
          fontFamily="SuisseIntlRegular"
          fontSize="sm"
        >
          {props.children}
        </chakra.dd>

        <Flex mt={2} flexWrap="wrap" alignItems="center">
          {props?.skills?.map((skill) => (
            <Tag
              // marginTop={"0.5rem"}
              marginRight={"0.5rem"}
              marginBottom={"0.5rem"}
              key={skill}
              variant="solid"
              colorScheme={"teal"}
              size="sm"
            >
              {skill}
            </Tag>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};

export default WorkExpDetails;
