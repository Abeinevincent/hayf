import { Box, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";
import Hero from "../../components/layout/hero/Hero";

const Academia = () => {
  return (
    <Box>
      <Hero pagename="Academics" />
      <Box>
        <Heading textAlign={"center"} overflow="hidden" my={4}>
          Academia
        </Heading>
        <Text textAlign={"center"}>
          Take a look at Rwebiita Preparatory School Results
        </Text>
      </Box>
      <Box>
        <Text textAlign={"center"} my={6}>
          <Link href="#">2014 Results</Link>
        </Text>
        <Text textAlign={"center"} my={6}>
          <Link href="#">2015 Results</Link>
        </Text>
        <Text textAlign={"center"} my={6}>
          <Link href="#">2016 Results</Link>
        </Text>
        <Text textAlign={"center"} my={6}>
          <Link href="#">2017 Results</Link>
        </Text>
        <Text textAlign={"center"} my={6}>
          <Link href="#">2018 Results</Link>
        </Text>
        <Text textAlign={"center"} my={6}>
          <Link href="#">2019 Results</Link>
        </Text>
        <Text textAlign={"center"} my={6}>
          <Link href="#">2020 Results</Link>
        </Text>
        <Text textAlign={"center"} my={6}>
          <Link href="#">2021 Results</Link>
        </Text>
        <Text textAlign={"center"} my={6}>
          <Link href="#">2022 Results</Link>
        </Text>
        <Text textAlign={"center"} my={6}>
          <Link href="#">2023 Results</Link>
        </Text>
      </Box>
    </Box>
  );
};

export default Academia;
