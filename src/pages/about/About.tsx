import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Hero from "../../components/layout/hero/Hero";
import AboutUs from "../../components/uicomponents/AboutUs";

const About = () => {
  return (
    <Box>
      <Hero pagename="About Us" />
      <Box>
        <Heading textAlign={"center"} my={4} overflow="hidden">
          About Us
        </Heading>
        <Text textAlign={"center"}>About Rwebiita PS</Text>
      </Box>
      <Box>
        <AboutUs />
      </Box>
    </Box>
  );
};

export default About;
