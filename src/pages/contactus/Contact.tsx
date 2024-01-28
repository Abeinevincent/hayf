import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Box,
  InputGroup,
  InputRightElement,
  Divider,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PrimaryColor } from "../../theme/GlobalStyles";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { BsCreditCard } from "react-icons/bs";
import ContactFormWithSocialButtons from "../../components/layout/contact/Contact";
import Hero from "../../components/layout/hero/Hero";

const Contact = () => {
  return (
    <Stack minH={"100vh"} align={"center"} direction={{ base: "column" }}>
      <Hero pagename="Contact" />
      <Heading textAlign={"center"} overflow="hidden" my={4}>
        Contact
      </Heading>
      <Text textAlign={"center"}>Contact Hope Action for Youth Foundation</Text>
      <ContactFormWithSocialButtons />

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15958.35687018355!2d30.6579161!3d-0.6140141!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d91b85aad35f23%3A0x7d20221beb34c4eb!2sUganda%20Redcross%20Society-Mbarara%20Branch!5e0!3m2!1sen!2sug!4v1706452027256!5m2!1sen!2sug"
        width="90%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        // referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </Stack>
  );
};

export default Contact;
