import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { galleryData, HomeInfo, tutorialsData } from "../../api/fakeApi";
import Course from "../../components/layout/course/Course";
import Hero from "../../components/layout/hero/Hero";

const Gallery = () => {

  const pagename = "Gallery"

  return (
    <Box>
      <Hero pagename={pagename}/>
      <Box>
        {/* COURSES HERE-- */}
        <Box>
          <Heading textAlign={"center"} overflow='hidden' my={4}>
            Gallery
          </Heading>
          <Text textAlign={"center"}>
            Take a look at Rwebiita Preparatory School
          </Text>
          <Box
            margin={"auto"}
            p={{ base: 1, md: 8, lg: 20 }}
            display="flex"
            alignItems={"center"}
            justifyContent="center"
            gap={10}
            flexWrap="wrap"
            w="100%"
            maxW="100%"
          >
            {galleryData.map((tutorial: any) => (
              <Course
                key={tutorial.title}
                isFiltering={true}
                tutorial={tutorial}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Gallery;
