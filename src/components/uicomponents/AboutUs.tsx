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
          Welcome to HAFYF
        </Text>
        <Box>
          <Box mb={3}>
            <Text>
              The Hope Action for Youth Foundation is a community-based
              organization located at P.O.BOX 420740 lower Circular Road, Red
              Cross Mbarara, Uganda. Its vision is to create an equitable,
              inclusive, and sustainable society where all people have equal
              opportunities. The foundation's mission is to advocate for and
              empower marginalized communities through programs focused on
              health, education, sustainable agriculture, environmental justice,
              capacity building, and economic empowerment. The organization's
              core values are dignity, empowerment, environmental stewardship
              and Integrity, and innovation, solidarity with marginalized
              groups, sustainability, and participation. The foundation is
              governed by a board of governors and executive director. The Key
              activities of the organization include; improving access to
              healthcare and education, agricultural training, promoting
              environmental conservation and justice, vocational skills
              development, advocacy, fostering community leadership and
              entrepreneurship. Finances come from donations, fundraising and
              business activities. The constitution provides the governance
              framework to fulfill the foundation's goal of empowering
              marginalized communities across Uganda.
            </Text>
          </Box>
        </Box>
      </Box>

      <Box w={{ base: "100%", md: "80%", lg: "60%" }}>
        <Text color={PrimaryColor} fontWeight={"bold"} fontSize={30} mb={5}>
          Our Mision
        </Text>
        <Box mb={3}>
          <Text>
            To advocate for and empower marginalized communities in Uganda
            through programs promoting health, education, sustainable
            agriculture, environmental justice, capacity building, and economic
            empowerment.
          </Text>
        </Box>
      </Box>

      <Box w={{ base: "100%", md: "80%", lg: "60%" }}>
        <Text color={PrimaryColor} fontWeight={"bold"} fontSize={30} mb={5}>
          Our Vision
        </Text>
        <Box mb={3}>
          <Text>
            A socially inclusive, sustainable, and equitable society where all
            people have access to equal opportunities.
          </Text>
        </Box>
      </Box>

      <Box w={{ base: "100%", md: "80%", lg: "60%" }}>
        <Text color={PrimaryColor} fontWeight={"bold"} fontSize={30} mb={5}>
          Our Core Values
        </Text>
        <Box mb={3}>
          <Text>
            <span style={{ fontWeight: 500, fontSize: 18 }}>
              {" "}
              Dignity and inclusion for all:
            </span>{" "}
            The foundation believes that all people deserve to be treated with
            respect, compassion, and granted equal rights and opportunities
            regardless of their background, identity or circumstances. It
            strives to promote environments where everyone feels welcomed,
            valued and able to fully participate
          </Text>

          <Text mt={5}>
            <span style={{ fontWeight: 500, fontSize: 18 }}>
              {" "}
              Empowerment through knowledge and skills:
            </span>{" "}
            The foundation aims to equip youth and other marginalized
            communities with the knowledge, skills, resources and support
            networks needed to realize their potential, pursue their goals and
            affect positive change. It focuses on building capacity rather than
            dependency.
          </Text>

          <Text mt={5}>
            <span style={{ fontWeight: 500, fontSize: 18 }}>
              {" "}
              Environmental stewardship and justice:
            </span>{" "}
            The foundation promotes responsible use and conservation of natural
            resources, as well as fair distribution of environmental benefits
            and burdens. It works to prevent exploitation of marginalized
            communities and ensure they have access to healthy living
            environments.
          </Text>

          <Text mt={5}>
            <span style={{ fontWeight: 500, fontSize: 18 }}>
              {" "}
              Integrity, transparency and accountability:
            </span>{" "}
            The foundation upholds high standards of ethics, openness and
            accountability in its operations. It is committed to honesty,
            keeping stakeholders informed and taking ownership for results.
          </Text>

          <Text mt={5}>
            <span style={{ fontWeight: 500, fontSize: 18 }}>
              {" "}
              Innovation and excellence:
            </span>{" "}
            The foundation aims to find and develop impactful new solutions to
            pressing social challenges. It pursues ongoing learning and
            improvement in its programs and operations.
          </Text>

          <Text mt={5}>
            <span style={{ fontWeight: 500, fontSize: 18 }}>
              {" "}
              Solidarity with marginalized communities:
            </span>{" "}
            The foundation stands in support and partnership with communities
            that experience discrimination, exclusion or injustice due to race,
            gender, class, disability or other factors. It amplifies unheard
            voices.
          </Text>

          <Text mt={5}>
            <span style={{ fontWeight: 500, fontSize: 18 }}>
              {" "}
              Sustainability and respect for local contexts:
            </span>{" "}
            The foundation's programs aim to deliver enduring positive change
            that continues even after funding ends. It respects local cultures,
            needs, knowledge and capabilities in the communities where it works.
          </Text>

          <Text mt={5}>
            <span style={{ fontWeight: 500, fontSize: 18 }}>
              {" "}
              Participation and social accountability:
            </span>{" "}
            The foundation involves youth, partners and community members in the
            planning and monitoring of its programs to ensure local ownership
            and meet real needs. It welcomes input and feedback to hold itself
            accountable.
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default AboutUs;
