import { Box, Heading, Text } from "@chakra-ui/react";
import { galleryData } from "../../api/fakeApi";
import Course from "../../components/layout/course/Course";
import Hero from "../../components/layout/hero/Hero";
import Brian from "../../assets/images/hayf/brian.jpg";
import Alice from "../../assets/images/hayf/alice.jpg";
import Ben from "../../assets/images/hayf/ben.jpg";
import Ada from "../../assets/images/hayf/ada.jpg";
import Ceila from "../../assets/images/hayf/ceila.jpg";
import Colleb from "../../assets/images/hayf/colleb.jpg";
import Edson from "../../assets/images/hayf/edson.jpg";
import Faith from "../../assets/images/hayf/faith.jpg";

const Gallery = () => {
  const pagename = "Gallery";

  return (
    <Box>
      <Hero pagename={pagename} />
      <Box>
        {/* COURSES HERE-- */}
        <Box>
          <Heading textAlign={"center"} overflow="hidden" my={4}>
            Gallery
          </Heading>
          <Text textAlign={"center"}>Take a look at HAYF</Text>
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
