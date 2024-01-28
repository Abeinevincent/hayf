import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import { HomeInfo, tutorialsData } from "../../api/fakeApi";
import Carousel from "../../components/layout/slider/Carousel";
import HomeComponent from "../../components/uicomponents/homecomponent/HomeComponent";
import NewsAndUpdatesComp from "../../components/uicomponents/homecomponent/NewsAndUpdates";
import { PrimaryColor } from "../../theme/GlobalStyles";
import { TeamMember } from "../../components/uicomponents/team/TeamMember";
import Brian from "../../assets/images/hayf/brian.jpg";
import Alice from "../../assets/images/hayf/alice.jpg";
import Ben from "../../assets/images/hayf/ben.jpg";
import Ada from "../../assets/images/hayf/ada.jpg";
import Ceila from "../../assets/images/hayf/ceila.jpg";
import Colleb from "../../assets/images/hayf/colleb.jpg";
import Edson from "../../assets/images/hayf/edson.jpg";
import Faith from "../../assets/images/hayf/faith.jpg";
import Osbert from "../../assets/images/hayf/osbert.jpg";
import Venjarest from "../../assets/images/hayf/venjarest.jpg";

export const team = [
  {
    id: 6,
    name: "Tumwegamire Adah",
    pp_url: Ada,
    role: "Member",
  },
  {
    id: 2,
    name: "Nakigudde Alice",
    pp_url: Alice,
    role: "Member",
  },

  {
    id: 3,
    name: "Tumuhaire Faith",
    pp_url: Faith,
    role: "Finance Manager",
  },

  {
    id: 9,
    name: "Akandwanaho Osbert",
    pp_url: Osbert,
    role: "General Secretary",
  },

  {
    id: 5,
    name: "Byamugisha Edson",
    pp_url: Edson,
    role: "Chair Person",
  },

  {
    id: 1,
    name: "Ruhangarinda Brian",
    pp_url: Brian,
    role: "IT Officer",
  },

  {
    id: 7,
    name: " Atuheire Ben",
    pp_url: Ben,
    role: "Member",
  },

  {
    id: 8,
    name: "Ampaire Celia",
    pp_url: Ceila,
    role: "Member",
  },

  {
    id: 4,
    name: "Kusasira Colleb",
    pp_url: Colleb,
    role: "Member",
  },

  {
    id: 9,
    name: "Bwembale Venjarest",
    pp_url: Venjarest,
    role: "Member",
  },
];

export const Home = () => {
  return (
    <Flex bg="#f8f8f8" flexDirection={"column"}>
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
              <Text
                style={{ textAlign: "justify" }}
                fontSize={{ base: 10, md: 12, lg: 14 }}
              >
                The Hope Action for Youth Foundation is a community-based
                organization located at P.O.BOX 420740 lower Circular Road, Red
                Cross Mbarara, Uganda. Its vision is to create an equitable,
                inclusive, and sustainable society where all people have equal
                opportunities. The foundation's mission is to advocate for and
                empower marginalized communities through programs focused on
                health, education, sustainable agriculture, environmental
                justice, capacity building, and economic empowerment. The
                organization's core values are dignity, empowerment,
                environmental stewardship and Integrity, and innovation,
                solidarity with marginalized groups, sustainability, and
                participation. The foundation is governed by a board of
                governors and executive director. The Key activities of the
                organization include; improving access to healthcare and
                education, agricultural training, promoting environmental
                conservation and justice, vocational skills development,
                advocacy, fostering community leadership and entrepreneurship.
                Finances come from donations, fundraising and business
                activities. The constitution provides the governance framework
                to fulfill the foundation's goal of empowering marginalized
                communities across Uganda.
              </Text>
            </Box>

            {/* <Flex
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
            </Flex> */}
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
            bg={PrimaryColor}
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
          bg="white"
        >
          {team.map((member) => (
            <TeamMember key={member.id} member={member} />
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};
