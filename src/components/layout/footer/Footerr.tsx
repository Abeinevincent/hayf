import { ReactNode } from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import {
  FaTwitter,
  FaYoutube,
  FaFacebook,
  FaDiscord,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaFax,
  FaWhatsapp,
  FaLocationArrow,
  FaTiktok,
} from "react-icons/fa";
import AppStoreBadge from "./AppStoreBadge";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        // bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
        bg: "orange",
        color: "white",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function LargeWithAppLinksAndSocial() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      fontSize={14}
    >
      <Container as={Stack} maxW={"8xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <Box>
              <ListHeader>About Us</ListHeader>
            </Box>
            <Text>HAYF is where Lorem ipsum</Text>

            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              quia, maxime architecto vel dolore sit quasi laborum, blanditiis
              velit quas libero enim corrupti nisi minima optio harum sapiente
              aliquam vitae.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              quia, maxime architecto vel dolore sit quasi laborum, blanditiis
              velit quas libero enim corrupti nisi minima optio harum sapiente
              aliquam vitae.
            </Text>
          </Stack>

          <Stack align={"flex-start"} gap={3}>
            <ListHeader>Quick Links</ListHeader>
            <Link href={"#"}>Home</Link>
            <Link href={"#"}>TikTok</Link>
            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>About Us</Link>
            {/* <Link href={"#"}>YouTube</Link> */}
            <Link href={"#"}>Login</Link>
            <Link href={"#"}>Register</Link>
            {/* <Link href={"#"}>Careers</Link> */}
            <Link href={"#"}>Contact Us</Link>
            {/* <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Cookies Policy</Link>
            <Link href={"#"}>Terms of Service</Link> */}
            <Link href={"#"}>FAQ</Link>
          </Stack>

          <Stack align={"flex-start"} gap={6}>
            <ListHeader>Contact Us</ListHeader>
            <Flex dir="row" alignItems="center" gap={3}>
              <SocialButton label={"Email"} href={"#"}>
                <FaEnvelope />
              </SocialButton>
              <Link href={"mailto:+256 772 620852"}>
                <Box>mkatusiimeh@gmail.com</Box>
              </Link>
            </Flex>

            <Flex dir="row" alignItems="center" gap={3}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaPhone />
              </SocialButton>
              <Link href={"tel:+256 772 620852"}>
                <Box>+256 772 620852</Box>
              </Link>
            </Flex>

            <Flex dir="row" alignItems="center" gap={3}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaFax />
              </SocialButton>
              <Link href={"#"}>
                <Box>+256 700 391 338</Box>
              </Link>
            </Flex>
            <Flex dir="row" alignItems="center" gap={3}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaWhatsapp />
              </SocialButton>
              <Link href={"#"}>
                <Box> +256 770 597 348</Box>
              </Link>
            </Flex>
            <Flex dir="row" alignItems="center" gap={3}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaLocationArrow />
              </SocialButton>
              <Link href={"#"}>
                <Box>P.O Box 420740, Mbarara, Uganda.</Box>
              </Link>
            </Flex>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>
              Install Our App{" "}
              <span style={{ color: "gray", fontSize: 12 }}>
                (comming Soon)
              </span>
            </ListHeader>
            <AppStoreBadge />
            {/* 
            <PlayStoreBadge /> */}
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text textAlign={"center"}>
            © {new Date().getFullYear()} HAYF. All rights reserved
          </Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton
              label={"Twitter"}
              href={"https://twitter.com/rwebiitangoma?lang=en"}
            >
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton
              label={"Instagram"}
              href={"https://www.facebook.com/Ngomanungi/"}
            >
              <FaFacebook />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaDiscord />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaLinkedin />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaTiktok />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
