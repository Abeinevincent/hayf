import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const BlogPost = ({ language }: { language: string }) => {
  return (
    <Flex
      flexDir={{ base: "column", lg: "row" }}
      gap={4}
      mb={6}
      align="flex-start"
    >
      <Box>
        <Link to="/">
          <Image
            w="600px"
            h="200px"
            objectFit={"contain"}
            src="https://images.unsplash.com/photo-1521575107034-e0fa0b594529?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80"
            alt=""
          />
        </Link>
      </Box>
      <Flex flexDir={"column"} justify="flex-start" gap={2}>
        <Box>
          <Link to="/">
            {" "}
            <Text
              _hover={{ textDecor: "underline" }}
              textTransform={"uppercase"}
            >
              {" "}
              #{language}
            </Text>
          </Link>
        </Box>
        <Box>
          <Link to="">
            <Text
              _hover={{ textDecor: "underline" }}
              fontSize={{base: 17, md: 20, lg: 27}}
              fontWeight={500}
              overflow="hidden"
            >
              {" "}
              Heading Here and Can be Long or Very or Even Very Very Long
            </Text>
          </Link>
        </Box>
        <Flex align={'center'} justify={"space-between"}>
          <Flex align={"center"} gap={2}>
            <Link to="/">
              <Image
                src="https://bit.ly/dan-abramov"
                w="10"
                h="10"
                borderRadius={"50%"}
                objectFit={"contain"}
              />
            </Link>
            <Link to="/">
              {" "}
              <Text _hover={{ textDecor: "underline" }} fontSize={12}>
                {" "}
                Abeinemukama Vicent
              </Text>
            </Link>
          </Flex>
          <Text fontSize={12}> 2 hours ago</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default BlogPost;
