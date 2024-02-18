import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Alert,
} from "@chakra-ui/react";
import { MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { BsPerson } from "react-icons/bs";

import { RiTwitterXLine } from "react-icons/ri";
import { PrimaryColor } from "../../../theme/GlobalStyles";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { BiDollar } from "react-icons/bi";
import { PhoneIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { PaymentMethods } from "./PaymentMethods";

export default function DonateForm() {
  const [revealDetails, setRevealDetails] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");

  const onBtnClick = () => {
    if (name && amount && email && phone && country) {
      setSubmitting(!submitting);
      setTimeout(() => {
        setRevealDetails(!revealDetails);
        setSubmitting(!submitting);
      }, 2000);
    } else {
      alert("Some inputs are still empty!");
    }
  };

  return (
    <Container maxW="full" mt={0} centerContent overflow="hidden">
      <Flex align={"center"} justify="center">
        <Box
          bg={PrimaryColor}
          color="white"
          borderRadius="lg"
          maxWidth={{ base: "100%", lg: "80%" }}
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          {!revealDetails ? (
            <Box
              p={4}
              display="flex"
              flexDirection={{ base: "column", lg: "row" }}
            >
              <Wrap
                flexDirection={{ base: "column", lg: "row" }}
                display={"flex"}
                // spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}
              >
                <WrapItem flex={1}>
                  <Box>
                    <Heading>Donate</Heading>
                    <Text
                      width={"90%"}
                      mt={{ sm: 3, md: 3, lg: 5 }}
                      color="white"
                    >
                      Our dedicated team at HAFYF is committed to making a
                      meaningful impact on vulnerable populations in
                      impoverished communities. Your in-kind support, whether
                      through donations, volunteering, or spreading awareness,
                      plays a vital role in amplifying our impact. Join us in
                      making a meaningful difference in the lives of those
                      facing adversity.
                    </Text>

                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start"
                    >
                      <IconButton
                        aria-label="instagram"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#0D74FF" }}
                        icon={<FaInstagram size="28px" />}
                      />
                      <IconButton
                        aria-label="twitter"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#0D74FF" }}
                        icon={<RiTwitterXLine size="28px" />}
                      />
                      <IconButton
                        aria-label="linkedin"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#0D74FF" }}
                        icon={<FaLinkedin size="28px" />}
                      />
                    </HStack>
                  </Box>
                </WrapItem>
                <WrapItem flex={1}>
                  <form
                    style={{
                      backgroundColor: "white",
                      borderRadius: 10,
                    }}
                  >
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>Your Full Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <BsPerson color="gray.800" />
                            </InputLeftElement>
                            <Input
                              placeholder="Enter your fullname"
                              type="text"
                              required
                              size="md"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </InputGroup>
                        </FormControl>

                        <FormControl id="name">
                          <FormLabel>Amount($)</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <BiDollar color="gray.800" />
                            </InputLeftElement>
                            <Input
                              placeholder="Enter amount"
                              type="number"
                              size="md"
                              required
                              value={amount}
                              onChange={(e) => setAmount(e.target.value)}
                            />
                          </InputGroup>
                        </FormControl>

                        <FormControl id="name">
                          <FormLabel>Email</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <MdOutlineEmail color="gray.800" />
                            </InputLeftElement>
                            <Input
                              type="text"
                              required
                              placeholder="Enter your email"
                              size="md"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </InputGroup>
                        </FormControl>

                        <FormControl id="name">
                          <FormLabel>Phone Number</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <PhoneIcon color="gray.800" />
                            </InputLeftElement>
                            <Input
                              type="text"
                              placeholder="Enter phone number"
                              required
                              size="md"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                            />
                          </InputGroup>
                        </FormControl>

                        <FormControl id="name">
                          <FormLabel>Country</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <MdLocationOn color="gray.800" />
                            </InputLeftElement>
                            <Input
                              type="text"
                              placeholder="Enter country"
                              required
                              size="md"
                              value={country}
                              onChange={(e) => setCountry(e.target.value)}
                            />
                          </InputGroup>
                        </FormControl>

                        <FormControl id="name" float="right">
                          <Button
                            onClick={() => onBtnClick()}
                            variant="solid"
                            bg="#0D74FF"
                            color="white"
                            _hover={{}}
                          >
                            {submitting ? "Submitting.." : "Proceed"}
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </form>
                </WrapItem>
              </Wrap>
            </Box>
          ) : (
            <PaymentMethods />
          )}
        </Box>
      </Flex>
    </Container>
  );
}
