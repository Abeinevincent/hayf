import { Flex, Box, Text, Icon, Stack, Button } from "@chakra-ui/react";
import { TertiaryColor, PrimaryYellowColor } from "../../../theme/GlobalStyles";
import { BsEnvelope } from "react-icons/bs";
import { FaDonate } from "react-icons/fa";
import { Link } from "react-router-dom";

const Announcement = () => {
  return (
    <>
      <Box
        display={{ base: "none", md: "flex" }}
        bg={TertiaryColor}
        zIndex={99999}
        h={12}
        alignItems="center"
        flexWrap={"wrap-reverse"}
        justifyContent={"space-around"}
        style={{ alignItems: "center!important" }}
      >
        <Box
          display={"flex"}
          gap={2}
          alignItems="center"
          justifyContent={"space-around"}
        >
          <Icon
            color={PrimaryYellowColor}
            as={BsEnvelope}
            data-testid="email-icon"
          />
          <Text color={"white"}>codewithvincent@gmail.com</Text>
        </Box>
        <Box
          display="flex"
          gap={2}
          alignItems="center"
          justifyContent={"space-around"}
        >
          <Button
            leftIcon={<FaDonate />}
            colorScheme={"yellow"}
            variant="solid"
            py={0.5}
            height={8}
          >
            Donate
          </Button>
        </Box>
      </Box>
      <Box
        display={{ base: "flex", md: "none" }}
        bg={TertiaryColor}
        h={12}
        position="fixed"
        bottom={0}
        width="100%"
        zIndex={9999}
        color="white"
        alignItems="center"
        flexWrap={"wrap"}
        justifyContent={"center"}
        style={{ alignItems: "center!important" }}
      >
        <Text textAlign={"center"} color={"white"} fontSize={13}>
          Contact us at{" "}
          <a href="tel:+256 772 620852" style={{ textDecoration: "underline" }}>
            +256 772 620852
          </a>
        </Text>
      </Box>
    </>
  );
};

export default Announcement;
