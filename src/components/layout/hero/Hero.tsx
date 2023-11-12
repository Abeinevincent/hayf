import {
  Flex,
  Box,
  Heading,
  Code,
  Text,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PrimaryYellowColor } from "../../../theme/GlobalStyles";
import Hero1 from "../../../assets/images/ps1.jpeg";

type HeroProps = {
  pagename: string;
};

const Hero = ({ pagename }: HeroProps) => {
  const isLargeDevice = useBreakpointValue({ base: false, md: true, lg: true });
  return (
    <Box>
      <Box
        w="100vw"
        h={270}
        display="flex"
        alignItems={"center"}
        justifyContent="center"
        bg='linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
            url("https://img.freepik.com/free-photo/colour-corporate-yellow-message-material_1134-914.jpg?w=900&t=st=1687842176~exp=1687842776~hmac=a904a2aa52c587eed453ca3c412f8c76255c2d58a0abf4b4e6a8f1dc786e44a0") center'
        backgroundSize={"cover"}
        className="headerSection"
        p={3}
      >
        <Flex align={"center"} gap={5}>
          <Text
            fontSize={26}
            color="white"
            mb={4}
            style={{
              textAlign: "center",
            }}
          >
            HAYF
            <span style={{ marginLeft: 20 }}>/</span>
          </Text>
          <Heading
            overflowY={"hidden"}
            color="white"
            fontSize={26}
            mb={4}
            style={{ textAlign: "center" }}
          >
            <span style={{ color: PrimaryYellowColor }}>{pagename}</span>
          </Heading>
        </Flex>
      </Box>
    </Box>
  );
};

export default Hero;
