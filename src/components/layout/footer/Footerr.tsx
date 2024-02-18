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
  FaInstagram,
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

            <Text>
              The Hope Action for Youth Foundation, located at P.O.BOX 420740,
              Lower Circular Road, Red Cross Mbarara, Uganda, envisions an
              equitable, inclusive, and sustainable society where all people
              have equal opportunities. Our mission is to advocate for and
              empower marginalized communities through comprehensive programs in
              health, education, sustainable agriculture, environmental justice,
              capacity building, and economic empowerment.Join The Hope Action
              for Youth Foundation in our commitment to creating a brighter and
              more equitable future for all. Together, we can make a lasting
              impact and empower those in need.
            </Text>
          </Stack>

          <Stack align={"flex-start"} gap={3}>
            <ListHeader>Quick Links</ListHeader>
            <Link href={"#"}>Home</Link>
            <Link href={"#"}>TikTok</Link>
            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>About Us</Link>
            <Link href={"#"}>Donate</Link>
            <Link href={"#"}>Contact Us</Link>
            <Link href={"#"}>FAQ</Link>
          </Stack>

          <Stack align={"flex-start"} gap={6}>
            <ListHeader>Contact Us</ListHeader>
            <Flex dir="row" alignItems="center" gap={3}>
              <SocialButton label={"Email"} href={"#"}>
                <FaEnvelope />
              </SocialButton>
              <Link href={"mailto:+256 772 620852"}>
                <Box>hafyfuganda@gmail.com</Box>
              </Link>
            </Flex>

            <Flex dir="row" alignItems="center" gap={3}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaPhone />
              </SocialButton>
              <Link href={"tel:+256 779 327 818"}>
                <Box>+256 779 327 818</Box>
              </Link>
            </Flex>

            <Flex dir="row" alignItems="center" gap={3}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaFax />
              </SocialButton>
              <Link href={"#"}>
                <Box>+256 779 327 818</Box>
              </Link>
            </Flex>
            <Flex dir="row" alignItems="center" gap={3}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaWhatsapp />
              </SocialButton>
              <Link href={"#"}>
                <Box> +256 779 327 818</Box>
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
            © {new Date().getFullYear()} HAFYF. All rights reserved
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
            <SocialButton
              label={"Instagram"}
              href={
                "https://www.instagram.com/hafyf_africa/?igsh=cmNxczhoeWp6NDBr"
              }
            >
              <FaInstagram />
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
