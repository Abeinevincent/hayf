import { Flex, Image, Text } from "@chakra-ui/react";
import CM from "../../../assets/images/cm.jpeg";

export const TeamMember = ({
  member,
}: {
  member: { id: number; name: string; pp_url: string };
}) => {
  return (
    <Flex width={"15%"} flexDir={"column"}>
      <Image
        width={"100%"}
        height={"70%"}
        objectFit={"cover"}
        src={member.pp_url}
        alt=""
      />
      <Flex flexDir={"column"} gap={1} m={3}>
        <Text fontWeight="bold">{member.name}</Text>
        <p>Chief Executive Officer</p>
      </Flex>
    </Flex>
  );
};
