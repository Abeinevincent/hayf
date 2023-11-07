import { Flex, Image, Text } from "@chakra-ui/react";
import CM from "../../../assets/images/cm.jpeg";

export const TeamMember = () => {
  return (
    <Flex width={"15%"} flexDir={"column"}>
      <Image
        width={"100%"}
        height={"70%"}
        objectFit={"cover"}
        src={CM}
        alt=""
      />
      <Flex flexDir={"column"} gap={1} m={3}>
        <Text fontWeight="bold">Byamugisha Edson</Text>
        <p>Chief Executive Officer</p>
      </Flex>
    </Flex>
  );
};
