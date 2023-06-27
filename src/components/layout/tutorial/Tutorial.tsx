import { Box, Flex, Image, Link } from "@chakra-ui/react";
import { PrimaryColor } from "../../../theme/GlobalStyles";
import { useState } from "react";
export interface TutorialProps {
  title: string;
  description: string;
  videoSrc: string;
  key: any;
}

const Tutorial = ({ tutorial }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false)
  };

  const scale = isHovered ? "scale(1.03)" : "scale(1)";
  const bgColor = isHovered ? PrimaryColor : "inherit";

  return (
    <Link
      href={tutorial.videoSrc}
      borderRadius={10}
      textDecor="none !important"
      cursor={"pointer"}
      display="flex"
      flexDirection={"column"}
      gap={3}
      pb={5}
      boxShadow={"md"}
      w={{ base: "95%", md: "50%", lg: "25%" }}
      backgroundColor="white"
      transform={scale}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      transition="transform 0.3s ease-in-out"
    >
      <Box flex={1} bgColor={"white"}>
        <Image
          src={tutorial.imgSrc}
          borderTopLeftRadius={10}
          borderTopRightRadius={10}
          w="100%"
          h="10rem"
          objectFit={"cover"}
        />
      </Box>
      <Box flex={1}>
        <Box
          textAlign={"center"}
          fontSize={{ base: 18, md: 19, lg: 18 }}
          _hover={{ textDecoration: "none" }}
          color={bgColor}
          overflow="hidden"
          fontWeight={500}
          whiteSpace="nowrap"
          textOverflow="ellipsis"
          px={3}
        >
          {tutorial.title}
        </Box>
        <Box
          _hover={{ textDecoration: "none" }}
          fontSize={{ base: 10, md: 12, lg: 14 }}
          w="100%"
          p={5}
        >
          {tutorial.description}
        </Box>
        <Flex px={5} fontSize={{ base: 12, md: 13, lg: 14 }} gap={4}>
          <Box color={"darkblue"}>CODE:</Box>
          <Box>2000</Box>
        </Flex>
      </Box>
    </Link>
  );
};

export default Tutorial;
