import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { PrimaryColor } from "../../../theme/GlobalStyles";

const HomeComponent = ({ item }: { item: any }) => {
  return (
    <Flex
      p={{ base: 5, md: 10, lg: 20 }}
      mx={{ base: 5, md: 30, lg: 60 }}
      // bg={item.backgroundColor}
      alignItems={"center"}
      flexDir={{
        base: item.isRowReversed ? "column" : "column",
        lg: item.isRowReversed ? "row-reverse" : "row",
      }}
    >
      <Box flex={1}>
        <Text color={PrimaryColor} fontWeight={"bold"} mb={3}>
          {item.title}
        </Text>
        <Text fontWeight={"bold"} fontSize={30} mb={5}>
          {item.heading}
        </Text>
        <Box>
          <Text>{item.paragraph}</Text>
        </Box>
      </Box>
      <Box flex={1}>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Image
            w={{ base: "100%", lg: "75%" }}
            h={{ base: "100%", lg: "50%" }}
            src={item.image}
            alt=""
          />
        </Box>
      </Box>
    </Flex>
  );
};

export default HomeComponent;
