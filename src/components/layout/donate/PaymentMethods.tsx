import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export const PaymentMethods = () => {
  return (
    <Flex flexDir="column">
      <Heading marginBottom={10}>Choose Payment Method</Heading>
      <Flex>
        <Box>
          <Box>
            <Text fontWeight={"bold"} fontSize={20}>
              Bank Account
            </Text>
          </Box>
          <Box>
            <Text>Account Name: HOPE ACTION FOR YOUTH FOUNDATION</Text>
            <Text>Bank Name:DFCU</Text>
            <Text>Account Number: 01120015110305</Text>
            <Text>Branch: MBARARA</Text>
          </Box>
        </Box>
        <Box>
          <Box>
            <Text fontWeight={"bold"} fontSize={20}>
              Mobile Money
            </Text>
          </Box>
          <Box>
            <Text>Mobile Money Numeber: +256 779 327 818</Text>
            <Text>Name: BYAMUGISHA EDSON</Text>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};
