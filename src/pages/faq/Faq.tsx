import {
  Box,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Icon,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { FaPlus, FaMinus } from "react-icons/fa";
import FAQ from "../../components/layout/faqs/FAQ";

const FAQPage = () => {
  return (
    <Box w="50%" h="auto" mx="auto" my={10}>
      <Heading overflow={"hidden"} mb={8}>
        Frequently Asked Questions
      </Heading>
      <Tabs>
        <TabList overflow={"hidden"} borderBottom="none">
          <Tab>All</Tab>
          <Tab>Donations</Tab>
          <Tab>Courses</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Accordion allowToggle>
              <FAQ />
            </Accordion>
          </TabPanel>
          <TabPanel>
            <FAQ />
          </TabPanel>
          <TabPanel>
            <FAQ />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default FAQPage;

// import { AddIcon, MinusIcon } from "@chakra-ui/icons";
// import {
//   Accordion,
//   AccordionButton,
//   AccordionIcon,
//   AccordionItem,
//   AccordionPanel,
//   Box,
//   Tabs,
//   TabList,
//   TabPanels,
//   Tab,
//   TabPanel,
//   Heading,
//   Flex,
//   Input,
//   Button,
// } from "@chakra-ui/react";
// import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import FAQ from "../../components/layout/faqs/FAQ";
// import { PrimaryYellowColor } from "../../theme/GlobalStyles";

// const Faq = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleAccordionChange = (index: any) => {
//     setActiveIndex(index === activeIndex ? -1 : index);
//   };

//   return (
//     <Box
//       w={{ base: "95%", md: "80%", lg: "50%" }}
//       display={"flex"}
//       // justifyContent="center"
//       alignItems={"center"}
//       h="100%"
//       margin={"auto"}
//     >
//       <Box>
//         <Tabs>
//           <Flex flexDirection={"column"} justify={"flex-start"}>
//             <Box
//               fontSize={30}
//               fontWeight="bold"
//               textAlign={"center"}
//               mb={6}
//               overflow="hidden"
//             >
//               Frequently Asked Questions
//             </Box>
//             <TabList
//               w={{ base: "100%", lg: "100%" }}
//               border={"none"}
//               overflow={"hidden"}
//               display="flex"
//             >
//               <Tab fontSize={14}>All</Tab>
//               <Tab fontSize={14}>Donations</Tab>
//               <Tab fontSize={14}>Courses</Tab>
//             </TabList>
//           </Flex>

//           <TabPanels>
//             <TabPanel>
//               <FAQ
//                 handleAccordionChange={handleAccordionChange}
//                 activeIndex={activeIndex}
//               />
//             </TabPanel>

//             <TabPanel>
//               <FAQ
//                 handleAccordionChange={handleAccordionChange}
//                 activeIndex={activeIndex}
//               />
//             </TabPanel>

//             <TabPanel>
//               <FAQ
//                 handleAccordionChange={handleAccordionChange}
//                 activeIndex={activeIndex}
//               />
//             </TabPanel>
//           </TabPanels>
//         </Tabs>
//       </Box>
//     </Box>
//   );
// };

// export default Faq;
