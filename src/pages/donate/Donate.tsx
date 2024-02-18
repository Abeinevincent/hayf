import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import DonateForm from "../../components/layout/donate/DonateForm";

const Donate = () => {
  return (
    <Flex color="black" margin={"auto"}>
      <Box
        w="100vw"
        h={"100%"}
        display="flex"
        alignItems={"center"}
        justifyContent="center"
        bg='linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
            url("https://cdna.artstation.com/p/assets/images/images/059/591/140/large/juanartxz-fo3uupdwiaqig7e.jpg?1676718286") center'
        backgroundSize={"cover"}
        className="headerSection"
        p={3}
      >
        <DonateForm />
      </Box>
    </Flex>
  );
};

export default Donate;
