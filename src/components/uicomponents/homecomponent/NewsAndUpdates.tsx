import { Box, Flex, Image, Link } from "@chakra-ui/react";
import { PrimaryColor } from "../../../theme/GlobalStyles";
import { useState } from "react";
export interface TutorialProps {
  title: string;
  description: string;
  imgSrc: string;
  datecreated: string;
}

const NewsAndUpdatesComp = ({
  title,
  description,
  datecreated,
  imgSrc,
}: TutorialProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const scale = isHovered ? "scale(1.03)" : "scale(1)";
  const bgColor = isHovered ? PrimaryColor : "inherit";

  return (
    <Link
      href={"#"}
      borderRadius={10}
      textDecor="none !important"
      cursor={"pointer"}
      display="flex"
      flexDirection={"column"}
      gap={3}
      boxShadow={"md"}
      w={{ base: "95%", md: "50%", lg: "25%" }}
      backgroundColor="white"
      transform={scale}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      transition="transform 0.3s ease-in-out"
    >
      <Box flex={1} bgColor={"white"}>
        <Image src={imgSrc} w="100%" h="16rem" objectFit={"cover"} />
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
          {title}
        </Box>
        <Box
          _hover={{ textDecoration: "none" }}
          fontSize={{ base: 10, md: 12, lg: 14 }}
          w="100%"
          p={5}
        >
          {description}
        </Box>
        <Box p={5} textAlign={"right"} color={PrimaryColor}>
          {datecreated}
        </Box>
      </Box>
    </Link>
  );
};

export default NewsAndUpdatesComp;
