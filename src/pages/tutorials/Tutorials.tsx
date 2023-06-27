import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Text,
} from "@chakra-ui/react";
import { tutorialsData } from "../../api/fakeApi";
import UnderConstruction from "../../assets/images/underconst.png";
import Tutorial from "../../components/layout/tutorial/Tutorial";
import { PrimaryBasicColor, PrimaryColor } from "../../theme/GlobalStyles";
import { useState } from "react";

const Tutorials = () => {
  const [value, setValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      setIsEditing(false);
    }
  };
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection={"column"}
      justifyContent="center"
    >
      <Box>
        <Text
          textAlign={"center"}
          fontSize={{ base: 20, md: 25, lg: 30 }}
          fontWeight={500}
        >
          Tutorials from CodeWithVicent Youtube Channel
        </Text>
        <Text
          w={{ base: "70%", lg: "100%" }}
          textAlign={"center"}
          m="auto"
          color={PrimaryColor}
          fontSize={{ base: 12, md: 13, lg: 14 }}
        >
          All tutorials are backed up by a real world project
        </Text>
      </Box>

      <Flex
        alignItems={"center"}
        py={{ base: 1, lg: 5 }}
        w={{ base: "90%", lg: "50%" }}
        justifyContent="space-between !important"
        flexDirection={{ base: "column", lg: "row" }}
        gap={{ base: 2, lg: 10 }}
      >
        <Box
          flexDirection={{ base: "column", lg: "row" }}
          flex={1}
          display="flex"
          gap={2}
          alignItems={"center"}
        >
          <Box>Category :</Box>
          <Select
            w={{ base: "100%", md: "80%", lg: "70%" }}
            placeholder="Select option"
          >
            <option value="option1">Frontend Development</option>
            <option value="option1">Backend Development</option>
            <option value="option1">Artificial Inteligence</option>
            <option value="option1">DevOps</option>
            <option value="option2">Database Programming</option>
            <option value="option3">Full Stack Development</option>
          </Select>
        </Box>
        <Box flex={1}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input
              boxShadow={"md"}
              outline="none"
              type="text"
              placeholder="Search here.."
              value={value}
              onChange={(event) => setValue(event.target.value)}
              onFocus={() => setIsEditing(true)}
              onBlur={() => setIsEditing(false)}
              onKeyDown={handleKeyDown}
              cursor={isEditing ? "auto" : "default"}
            />
          </InputGroup>
        </Box>
      </Flex>

      <Box
        margin={"auto"}
        p={{ base: 1, md: 8, lg: 20 }}
        display="flex"
        alignItems={"center"}
        justifyContent="center"
        gap={10}
        flexWrap="wrap"
        w="100%"
        maxW="100%"
      >
        {tutorialsData.map((tutorial: any) => (
          <Tutorial key={tutorial.title} tutorial={tutorial} />
        ))}
      </Box>
    </Box>
  );
};

export default Tutorials;
