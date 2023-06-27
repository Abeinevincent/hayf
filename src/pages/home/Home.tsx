import {
  Flex,
  Box,
  Heading,
  Code,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { HomeInfo, tutorialsData } from "../../api/fakeApi";
import Course from "../../components/layout/course/Course";
import Hero from "../../components/layout/hero/Hero";
import Carousel from "../../components/layout/slider/Carousel";
import HomeComponent from "../../components/uicomponents/homecomponent/HomeComponent";
import NewsAndUpdatesComp from "../../components/uicomponents/homecomponent/NewsAndUpdates";
import { PrimaryBasicColor, PrimaryColor } from "../../theme/GlobalStyles";

export const Home = () => {
  const isLargeDevice = useBreakpointValue({ base: false, md: true, lg: true });

  return (
    <Flex bg="#f8f8f8" flexDirection={"column"}>
      {/* <Hero /> */}
      <Box>
        <Carousel />
      </Box>
      <Box>
        <Flex
          p={{ base: 5, md: 10, lg: 20 }}
          bg="white"
          alignItems={"center"}
          justifyContent="center"
          flexDir={"column"}
        >
          <Box w={{ base: "100%", md: "80%", lg: "60%" }}>
            <Text
              textAlign={"center"}
              color={PrimaryColor}
              fontWeight={"bold"}
              fontSize={30}
              mb={5}
            >
              Welcome to Rwebita Preparatory School
            </Text>
            <Box mb={3}>
              <Text>
                Welcome to Rwebiita Preparatory School, a vibrant and nurturing
                environment where learning comes alive! At Rwebiita Preparatory
                School, we are dedicated to providing a quality education that
                lays a strong foundation for your child's academic and personal
                growth.
              </Text>
              <Text>
                Our primary school is a place where curiosity is fostered,
                friendships are formed, and young minds are empowered. We
                believe in creating a supportive and inclusive community where
                every student feels valued and encouraged to reach their full
                potential.
              </Text>
            </Box>
            <Box>
              <Text>
                With a team of dedicated and passionate educators, we strive to
                create a joyful learning experience that sparks curiosity,
                ignites creativity, and develops critical thinking skills. Our
                holistic approach to education encompasses not only academic
                excellence but also the development of character, resilience,
                and a love for lifelong learning.
              </Text>
              <Text>
                At Rwebiita Preparatory School, we understand the importance of
                strong partnerships between school, parents, and the wider
                community. We believe that education is a collaborative effort,
                and we encourage open communication and involvement from parents
                to create a supportive and nurturing learning environment for
                our students.
              </Text>
            </Box>
            <Flex
              flexDir={{ base: "column", lg: "row" }}
              gap={5}
              align={"center"}
              justify="center"
              mt={7}
            >
              <Box>
                <Heading
                  textAlign={"center"}
                  color={PrimaryColor}
                  overflow="hidden"
                >
                  50+
                </Heading>
                <Text textAlign={"center"} fontWeight={400} color={"gray"}>
                  Teaching & Non Teaching Staff
                </Text>
              </Box>
              <Box>
                <Heading
                  textAlign={"center"}
                  color={PrimaryColor}
                  overflow="hidden"
                >
                  500+
                </Heading>
                <Text textAlign={"center"} fontWeight={400} color={"gray"}>
                  Students
                </Text>
              </Box>
              <Box>
                <Heading
                  textAlign={"center"}
                  color={PrimaryColor}
                  overflow="hidden"
                >
                  200+
                </Heading>
                <Text textAlign={"center"} fontWeight={400} color={"gray"}>
                  Top Notch Learning Resources
                </Text>
              </Box>
              <Box>
                <Heading
                  textAlign={"center"}
                  color={PrimaryColor}
                  overflow="hidden"
                >
                  1000+
                </Heading>
                <Text textAlign={"center"} fontWeight={400} color={"gray"}>
                  Supportive Community
                </Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Box>
          {HomeInfo.map((item: any) => (
            <HomeComponent item={item} />
          ))}
        </Box>
        {/* NEWS AND UPDATES-- */}
        <Box>
          <Heading textAlign={"center"} overflow="hidden">
            News & Updates
          </Heading>
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
    </Flex>
  );
};
