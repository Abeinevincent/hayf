import { Box, Stack, Button } from "@chakra-ui/react";
import { useState } from "react";
import { FaDonate, FaPhone } from "react-icons/fa";
import { PrimaryYellowColor } from "../../../theme/GlobalStyles";
import { MenuItem } from "./MenuItem";

export const MenuLinks = ({
  isOpen,
  active,
  setIsOpen,
}: {
  isOpen: boolean;
  active: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem bdr={"bdr"} setIsOpen={setIsOpen} active={active} to="/">
          Home
        </MenuItem>

        <MenuItem setIsOpen={setIsOpen} bdr={"bdr"} active={active} to="/about">
          About Us
        </MenuItem>
        <MenuItem
          setIsOpen={setIsOpen}
          bdr={"bdr"}
          active={active}
          to="/gallery"
        >
          Gallery
        </MenuItem>

        <MenuItem
          setIsOpen={setIsOpen}
          bdr={"bdr"}
          active={active}
          to="/newsandupdates"
        >
          News & Updates
        </MenuItem>

        <MenuItem setIsOpen={setIsOpen} bdr={"bdr"} active={active} to="/login">
          Login
        </MenuItem>
        <MenuItem setIsOpen={setIsOpen} active={active} to="/contact">
          <Box
            display="flex"
            gap={2}
            alignItems="center"
            justifyContent={"space-around"}
          >
            <Button
              rightIcon={<FaPhone style={{ transform: "translate(90deg)" }} />}
              colorScheme={PrimaryYellowColor}
              color="white"
              variant="solid"
              py={4.5}
              height={8}
              borderRadius={25}
            >
              Contact
            </Button>
          </Box>
        </MenuItem>
      </Stack>
    </Box>
  );
};
