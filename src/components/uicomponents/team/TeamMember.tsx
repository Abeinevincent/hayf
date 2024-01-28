import { Flex, Image, Text } from "@chakra-ui/react";

export const TeamMember = ({ member }: { member: any }) => {
  return (
    <Flex width={{ base: "90%", md: "40%", lg: "15%" }} flexDir={"column"}>
      <Image
        width={"100%"}
        height={"70%"}
        objectFit={"cover"}
        src={member.pp_url}
        alt=""
      />
      <Flex flexDir={"column"} gap={1} m={3}>
        <Text fontWeight="bold">{member.name}</Text>
        <p>{member?.role}</p>
      </Flex>
    </Flex>
  );
};
