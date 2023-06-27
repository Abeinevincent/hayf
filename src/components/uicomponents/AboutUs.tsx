import {
  Flex,
  Box,
  Heading,
  Code,
  Text,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { PrimaryColor } from "../../theme/GlobalStyles";

const AboutUs = () => {
  return (
    <Flex
      p={{ base: 5, md: 10, lg: 20 }}
      bg="white"
      alignItems={"center"}
      justifyContent="center"
      gap={10}
      flexDir={"column"}
    >
      <Box w={{ base: "100%", md: "80%", lg: "60%" }}>
        <Text color={PrimaryColor} fontWeight={"bold"} fontSize={30} mb={5}>
          Welcome to Rwebita Preparatory School
        </Text>
        <Box>
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
              friendships are formed, and young minds are empowered. We believe
              in creating a supportive and inclusive community where every
              student feels valued and encouraged to reach their full potential.
            </Text>
          </Box>
          <Box>
            <Text>
              With a team of dedicated and passionate educators, we strive to
              create a joyful learning experience that sparks curiosity, ignites
              creativity, and develops critical thinking skills. Our holistic
              approach to education encompasses not only academic excellence but
              also the development of character, resilience, and a love for
              lifelong learning.
            </Text>
            <Text>
              At Rwebiita Preparatory School, we understand the importance of
              strong partnerships between school, parents, and the wider
              community. We believe that education is a collaborative effort,
              and we encourage open communication and involvement from parents
              to create a supportive and nurturing learning environment for our
              students.
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
      </Box>

      <Box w={{ base: "100%", md: "80%", lg: "60%" }}>
        <Text color={PrimaryColor} fontWeight={"bold"} fontSize={30} mb={5}>
          Our Mision
        </Text>
        <Box mb={3}>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            quidem laboriosam totam a sint. Esse eveniet, perferendis inventore
            repellat voluptate nemo minima iure ducimus officia totam! Facilis
            dolores dolorum officiis!
          </Text>
        </Box>
      </Box>

      <Box w={{ base: "100%", md: "80%", lg: "60%" }}>
        <Text color={PrimaryColor} fontWeight={"bold"} fontSize={30} mb={5}>
          Our Vision
        </Text>
        <Box mb={3}>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            quidem laboriosam totam a sint. Esse eveniet, perferendis inventore
            repellat voluptate nemo minima iure ducimus officia totam! Facilis
            dolores dolorum officiis!
          </Text>
        </Box>
      </Box>

      <Box w={{ base: "100%", md: "80%", lg: "60%" }}>
        <Text color={PrimaryColor} fontWeight={"bold"} fontSize={30} mb={5}>
          Our Core Values
        </Text>
        <Box mb={3}>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            quidem laboriosam totam a sint. Esse eveniet, perferendis inventore
            repellat voluptate nemo minima iure ducimus officia totam! Facilis
            dolores dolorum officiis!
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default AboutUs;
