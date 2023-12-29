import styles from "./index.module.scss";
import { Link, NavLink } from "react-router-dom";
import {
  Flex,
  Image,
  Text,
  Button,
  Collapse,
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import Menu from "./Menu";

export default function Navbar() {
  const onActiveStyle = {
    borderBottom: `2px solid #000`,
    transition: "0.4s",
  };
  const onActive = ({ isActive }) => (isActive ? onActiveStyle : null);

  // state for Drawer
  const { isOpen, onToggle, onClose } = useDisclosure();
  return (
    <Flex
      justifyContent="space-between"
      p="42px 7%"
      bg="red"
      color="#000"
      fontSize="16px"
      fontWeight="600"
      pos="sticky"
      top="0px"
      left="0px"
      right="0px"
      flexDir="column"
      maxH="100vh"
    >
      <Flex justifyContent="space-between">
        <Link to="/">
          <Image
            src="./assets/imgs/navbar/logo-black.svg"
            w={{ sm: "120px", lg: "150px" }}
          />
        </Link>

        {!isOpen && (
          <Flex gap="40px" display={{ base: "none", sm: "none", lg: "flex" }}>
            <NavLink style={onActive} className={styles.navlink} to="/company">
              Company
            </NavLink>

            <NavLink style={onActive} className={styles.navlink} to="/services">
              Our Services
            </NavLink>

            <NavLink
              style={onActive}
              className={styles.navlink}
              to="/contact-us"
            >
              Contact us
            </NavLink>
          </Flex>
        )}

        <Flex alignItems="center" gap="7px" cursor="pointer" onClick={onToggle}>
          <Text>{!isOpen ? "Menu" : "Close"}</Text>

          <Image
            src={`./assets/imgs/navbar/${!isOpen ? "menu-black" : "close"}.svg`}
          />
        </Flex>
      </Flex>

      <Menu onClose={onClose} isOpen={isOpen} />
    </Flex>
  );
}
