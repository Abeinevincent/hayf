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
      <Text textAlign={"center"}>
        Contact Rwebiita Preparatory School
      </Text>
      <ContactFormWithSocialButtons />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15958.320967892581!2d30.4212991!3d-0.6259263!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d925b5ddd95af7%3A0xe91e23f27e13c945!2sRwebiita%20Preparatory%20School!5e0!3m2!1sen!2sug!4v1687848976831!5m2!1sen!2sug"
        width="90%"
        height="450"
        style={{marginTop: 20}}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Stack>
  );
};

export default Contact;
