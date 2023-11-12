import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { BsApple } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";

const AppStoreBadge = () => {
  return (
    <Flex flexDir={"column"} gap={4}>
      <Flex
        gap={4}
        backgroundColor="black"
        color="white"
        borderRadius={8}
        py={3}
        px={5}
        align="center"
        justify={"center"}
      >
        <Box>
          <BsApple size={50} />
        </Box>
        <Flex flexDir={"column"} gap={2}>
          <Box>Download on the</Box>
          <Box fontSize={25}>App Store</Box>
        </Flex>
      </Flex>
      <Flex
        gap={4}
        backgroundColor="black"
        color="white"
        borderRadius={8}
        py={3}
        px={5}
        align="center"
        justify={"center"}
      >
        <Box>
          <FaGooglePlay size={50} />
        </Box>
        <Flex flexDir={"column"} gap={2}>
          <Box>Get it on</Box>
          <Box fontSize={25}>Google Play</Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AppStoreBadge;
