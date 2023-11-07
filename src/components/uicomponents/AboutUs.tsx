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
          Welcome to HAYF
        </Text>
        <Box>
          <Box mb={3}>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              quia, maxime architecto vel dolore sit quasi laborum, blanditiis
              velit quas libero enim corrupti nisi minima optio harum sapiente
              aliquam vitae.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              quia, maxime architecto vel dolore sit quasi laborum, blanditiis
              velit quas libero enim corrupti nisi minima optio harum sapiente
              aliquam vitae.
            </Text>
          </Box>
          <Box>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              quia, maxime architecto vel dolore sit quasi laborum, blanditiis
              velit quas libero enim corrupti nisi minima optio harum sapiente
              aliquam vitae.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              quia, maxime architecto vel dolore sit quasi laborum, blanditiis
              velit quas libero enim corrupti nisi minima optio harum sapiente
              aliquam vitae.
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
            To provide naturing environment offering quality education supported
            by a strong foundation, of Christian values in partnership with
            parents, equiping students to become leaders to serve God, to serve
            their families, and to positively impact their communities and the
            world.
          </Text>
        </Box>
      </Box>

      <Box w={{ base: "100%", md: "80%", lg: "60%" }}>
        <Text color={PrimaryColor} fontWeight={"bold"} fontSize={30} mb={5}>
          Our Vision
        </Text>
        <Box mb={3}>
          <Text>Our pupils today, exemplary citizens of tomorrow!</Text>
        </Box>
      </Box>

      <Box w={{ base: "100%", md: "80%", lg: "60%" }}>
        <Text color={PrimaryColor} fontWeight={"bold"} fontSize={30} mb={5}>
          Our Motto
        </Text>
        <Box mb={3}>
          <Text>We care, we share, we learn together</Text>
        </Box>
      </Box>

      <Box w={{ base: "100%", md: "80%", lg: "60%" }}>
        <Text color={PrimaryColor} fontWeight={"bold"} fontSize={30} mb={5}>
          Our Core Values
        </Text>
        <Box mb={3}>
          <Text>
            Intergrity, respect, resilience, perseverence, optimisim, commitment
            to excellence and willingness to lead and serve
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default AboutUs;
