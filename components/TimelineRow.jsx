import React from "react";
import { Box, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";

export default function TimelineRow(props) {
  const { logo, title, date, color, index, arrLength } = props;
  const textColor = useColorModeValue("gray.700", "white.300");
  const bgIconColor = useColorModeValue("white.300", "gray.700");

  console.log(props);

  return (
    <Flex minH="55px" justifyContent="start" mb="5px">
      <Flex direction="column" minH="100%">
        <Icon
          as={logo}
          bg={bgIconColor}
          color={color}
          h={"30px"}
          w={"26px"}
          pe="6px"
          zIndex="1"
          position="relative"
          left={"-8px"}
        />
        <Box
          w="2px"
          bg="gray.200"
          minH={index === arrLength - 1 ? "15px" : "55px"}
        />
      </Flex>
      <Flex
        direction="column"
        justifyContent="flex-start"
        h="fit-content"
        pt={"0.42%"}
      >
        {props?.link ? (
          <a href={props.link} target="_blank" rel="noreferrer">
            <Text fontSize="sm" color={textColor} fontWeight="bold">
              {title}
            </Text>
          </a>
        ) : (
          <Text fontSize="sm" color={textColor} fontWeight="bold">
            {title}
          </Text>
        )}
        <Text fontSize="sm" color="gray.600" fontWeight="normal">
          {props?.description}
        </Text>
        <Text fontSize="xs" color="gray.400" fontWeight="normal">
          {date}
        </Text>
      </Flex>
    </Flex>
  );
}
