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
import { TeamMember } from "../../components/uicomponents/team/TeamMember";

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
              Welcome to Hope Action for Youth Foundation
            </Text>
            <Box mb={3}>
              <Text>
                Welcome to Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Ratione, suscipit, eligendi asperiores eum et velit
                officiis quos dolorum aliquam a deserunt modi reiciendis
                debitis. Esse error obcaecati eos a officiis.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                accusantium obcaecati doloremque, unde necessitatibus
                voluptatibus autem ullam ex, ab impedit odit voluptas? Dolorem,
                quasi laborum. Nesciunt unde repellendus eius sequi?
              </Text>
            </Box>
            <Box>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias quia, maxime architecto vel dolore sit quasi laborum,
                blanditiis velit quas libero enim corrupti nisi minima optio
                harum sapiente aliquam vitae.
              </Text>
              <Text>
                At Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Itaque nihil repellendus facere corporis. Aliquid libero sed ex
                inventore? Voluptates quaerat sit, alias quasi a consectetur
                odit! Earum cupiditate nesciunt explicabo!
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
                  Community Members
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
                  Employees
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
                  Youth Groups
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

        {/* FOCUS AREAS  */}
        <Text textAlign={"center"} fontWeight={"bold"} fontSize={30} mb={5}>
          Key Result Areas
        </Text>
        <Box>
          {HomeInfo.map((item: any) => (
            <HomeComponent item={item} />
          ))}
        </Box>

        {/* Our Activities */}
        <Box>
          <Heading textAlign={"center"} overflow="hidden">
            Our Activities
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

        {/* TEAM */}
        <Text textAlign={"center"} fontWeight={"bold"} fontSize={30} mb={5}>
          Our Team
        </Text>
        <Flex
          flexWrap={"wrap"}
          flexDir={"row-reverse"}
          alignContent={"center"}
          justify={"center"}
          width={"100%"}
          gap={10}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((member) => (
            <TeamMember key={member} />
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};
