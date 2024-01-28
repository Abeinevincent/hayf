import { Box, Heading, Text } from "@chakra-ui/react";
import { tutorialsData } from "../api/fakeApi";
import Hero from "../components/layout/hero/Hero";
import NewsAndUpdatesComp from "../components/uicomponents/homecomponent/NewsAndUpdates";

const NewsAndUpdates = () => {
  return (
    <Box>
      <Hero pagename="News & Updates" />
      <Box>
        <Heading textAlign={"center"} my={4} overflow="hidden">
          News & Updates
        </Heading>
        <Text textAlign={"center"}>HAFYF News and Updates</Text>
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
          {tutorialsData.map((tutorial: any) => (
            <NewsAndUpdatesComp
              key={tutorial.title}
              datecreated={tutorial.datecreated}
              title={tutorial.title}
              description={tutorial.description}
              imgSrc={tutorial.imgSrc}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default NewsAndUpdates;
