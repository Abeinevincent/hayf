import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Flex,
  Input,
  Text,
  Image,
  Heading,
  Button,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import BlogPost from "../../components/layout/blogpost/BlogPost";
import { PrimaryYellowColor } from "../../theme/GlobalStyles";
const Blog = () => {
  return (
    <Flex
      w={{ base: "95%", md: "85%", lg: "60%" }}
      p={{ base: 0, md: 35 }}
      h="100%"
      align="center"
      justify={"center"}
      margin="auto"
    >
      <Flex w="100%">
        <Box>
          <Tabs>
            <Flex justify={"flex-start"}>
              <TabList
                w={{ base: "100%", lg: "50%" }}
                border={"none"}
                overflow={"hidden"}
              >
                <Tab fontSize={14}>Latest</Tab>
                <Tab fontSize={14}>Recommended</Tab>
                <Tab fontSize={14}>Trending</Tab>
              </TabList>
              <Flex
                align={"center"}
                display={{ base: "none", md: "none", lg: "flex" }}
                _focus={{
                  outline: "none",
                  border: "1px solid #ccc",
                }}
                color="gray"
                borderRadius={4}
                border={"1px solid #ccc"}
                w="50%"
                pl={2}
              >
                <Box _hover={{ opacity: 0.7, cursor: "pointer" }}>
                  <FaSearch />
                </Box>
                <Input
                  color="gray"
                  border={"none"}
                  focusBorderColor="transparent"
                  placeholder="Search blogs.."
                />
              </Flex>
            </Flex>

            <TabPanels>
              <TabPanel>
                {[1, 2, 3, 4, 5].map((post: any) => (
                  <BlogPost language="Python" />
                ))}
              </TabPanel>

              <TabPanel>
                {[1, 2, 3, 4, 5].map((post: any) => (
                  <BlogPost language="TypeScript" />
                ))}
              </TabPanel>
              <TabPanel>
                <Box>
                  {[1, 2, 3, 4, 5].map((post: any) => (
                    <BlogPost language="JavaScript" />
                  ))}
                </Box>
                <Box display={"flex"} justifyContent="center">
                  <Button
                    backgroundColor="transparent"
                    border={`2px solid ${PrimaryYellowColor}`}
                    color={PrimaryYellowColor}
                    fontWeight={400}
                    variant="solid"
                    mt={5}
                    overflowY={"hidden"}
                    p={5}
                    height={8}
                    borderRadius={0}
                    w="50%"
                    _hover={{
                      backgroundColor: PrimaryYellowColor,
                      color: "white",
                    }}
                  >
                    Load More Blogs
                  </Button>
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Blog;
