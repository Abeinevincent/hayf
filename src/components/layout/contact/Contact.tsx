import "./contact.css";

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
  Textarea,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson, BsLinkedin } from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { FaTiktok } from "react-icons/fa";
export default function contact() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleClick = (e: any) => {
    toast.success(
      "Success, message has been received, we will get back to you soon!",
      {
        autoClose: false,
      }
    );
    setMessage("");
    setEmail("");
    setName("");
  };

  return (
    <Box
      // boxShadow={"md"}
      // className="contact_box_wrapper"
      color="white"
      border={"1px solid #ddd"}
      borderRadius="lg"
      m={{ sm: 4, md: 16, lg: 10 }}
      p={{ sm: 5, md: 5, lg: 16 }}
    >
      <Box p={4}>
        <Wrap
          flexDirection={"row"}
          display="flex"
          spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}
        >
          <WrapItem>
            <Box>
              <Heading overflow={"hidden"}>Contact</Heading>
              <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                Fill up the form below to contact
              </Text>
              <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                <VStack pl={0} spacing={3} alignItems="flex-start">
                  <Button
                    size="md"
                    height="48px"
                    width="200px"
                    fontSize={12}
                    variant="ghost"
                    color="orange"
                    _hover={{ border: "2px solid #1C6FEB" }}
                    leftIcon={<MdPhone color="#1970F1" size="20px" />}
                  >
                    +256 779 327 818
                  </Button>
                  <Button
                    size="md"
                    height="48px"
                    width="200px"
                    variant="ghost"
                    color="orange"
                    fontSize={12}
                    _hover={{ border: "2px solid #1C6FEB" }}
                    leftIcon={<MdEmail color="#1970F1" size="20px" />}
                  >
                    hafyfuganda@gmail.com
                  </Button>
                  <Button
                    size="md"
                    height="48px"
                    width="200px"
                    variant="ghost"
                    color="orange"
                    fontSize={12}
                    _hover={{ border: "2px solid #1C6FEB" }}
                    leftIcon={<MdLocationOn color="#1970F1" size="20px" />}
                  >
                    Red Cross Mbarara, Uganda
                  </Button>
                </VStack>
              </Box>
              <HStack
                mt={{ lg: 10, md: 10 }}
                spacing={5}
                px={5}
                alignItems="flex-start"
              >
                <IconButton
                  aria-label="facebook"
                  variant="ghost"
                  size="lg"
                  isRound={true}
                  onClick={() =>
                    (window.location.href =
                      "https://www.facebook.com/Ngomanungi")
                  }
                  bg="orange"
                  _hover={{ bg: "#0D74FF" }}
                  icon={<MdFacebook size="28px" />}
                />
                <IconButton
                  aria-label="linkedin"
                  variant="ghost"
                  size="lg"
                  isRound={true}
                  bg="orange"
                  _hover={{ bg: "#0D74FF" }}
                  icon={<BsLinkedin size="28px" />}
                />
                <IconButton
                  aria-label="discord"
                  variant="ghost"
                  size="lg"
                  isRound={true}
                  bg="orange"
                  _hover={{ bg: "#0D74FF" }}
                  icon={<FaTiktok size="28px" />}
                />
              </HStack>
            </Box>
          </WrapItem>
          <WrapItem>
            <Box bg="white" borderRadius="lg">
              <Box m={8} color="#0B0E3F">
                <VStack spacing={5}>
                  <FormControl id="name">
                    <FormLabel>
                      Your Name <span style={{ color: "red" }}>*</span>
                    </FormLabel>
                    <InputGroup borderColor="#E0E1E7">
                      <InputLeftElement
                        pointerEvents="none"
                        children={<BsPerson color="gray.800" />}
                      />
                      <Input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Full Name"
                        size="md"
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl id="name">
                    <FormLabel>
                      Mail <span style={{ color: "red" }}>*</span>
                    </FormLabel>
                    <InputGroup borderColor="#E0E1E7">
                      <InputLeftElement
                        pointerEvents="none"
                        children={<MdOutlineEmail color="gray.800" />}
                      />
                      <Input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        size="md"
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl id="name">
                    <FormLabel>
                      Message <span style={{ color: "red" }}>*</span>
                    </FormLabel>
                    <Textarea
                      color="gray"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      borderColor="gray.300"
                      _hover={{
                        borderRadius: "gray.300",
                      }}
                      placeholder="Message"
                    />
                  </FormControl>
                  <FormControl id="name" float="right">
                    <ToastContainer position="bottom-left" />
                    <Button
                      variant="solid"
                      bg="orange"
                      color="white"
                      _hover={{ opacity: 0.7 }}
                      onClick={handleClick}
                      disabled={!name || !email || !message}
                    >
                      Send Message
                    </Button>
                  </FormControl>
                </VStack>
              </Box>
            </Box>
          </WrapItem>
        </Wrap>
      </Box>
    </Box>
  );
}
