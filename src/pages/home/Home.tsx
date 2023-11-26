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

export const team = [
  {
    id: 1,
    name: "Ruhangarinda Brian",
    pp_url: Brian,
    role: "Software Developer",
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
    id: 4,
    name: "Kusasira Colleb",
    pp_url: Colleb,
    role: "Chairman",
  },

  {
    id: 5,
    name: "Byamugisha Edson",
    pp_url: Edson,
    role: "Member",
  },

  {
    id: 6,
    name: "Tumwegamire Adah",
    pp_url: Ada,
    role: "Member",
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
              <Text style={{ textAlign: "justify" }}>
                The Hope Action for Youth Foundation, located at P.O.BOX 420740,
                Lower Circular Road, Red Cross Mbarara, Uganda, envisions an
                equitable, inclusive, and sustainable society where all people
                have equal opportunities. Our mission is to advocate for and
                empower marginalized communities through comprehensive programs
                in health, education, sustainable agriculture, environmental
                justice, capacity building, and economic empowerment. Governed
                by a dedicated board of governors and led by an Executive
                Director, our organization welcomes members committed to values
                of dignity, empowerment, environmental stewardship, integrity,
                innovation, solidarity with marginalized groups, sustainability,
                and participation. Our key initiatives include improving
                healthcare and education access, agricultural training,
                environmental conservation and justice, vocational skills
                development, advocacy, fostering community leadership, and
                entrepreneurship. Financial support is derived from donations,
                fundraising, and sustainable business activities. Our
                constitution provides the governance framework to fulfill our
                goal of empowering marginalized communities across Uganda. Join
                The Hope Action for Youth Foundation in our commitment to
                creating a brighter and more equitable future for all. Together,
                we can make a lasting impact and empower those in need.
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
          {team.map((member) => (
            <TeamMember key={member.id} member={member} />
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};
