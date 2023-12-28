import styles from "./index.module.scss";
import { Link, NavLink } from "react-router-dom";
import {
  Flex,
  Image,
  Text,
  Button,
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

export default function Navbar() {
  // navbar has 2 color variants: black and white
  const [color, setColor] = useState("#fff");

  const toBlack = () => setColor("#000");
  const toWhite = () => setColor("#fff");

  // style to apply when NavLink is active
  const onActiveStyle = {
    borderBottom: `2px solid ${color}`,
    transition: "0.4s",
  };
  const onActive = ({ isActive }) => (isActive ? onActiveStyle : null);

  // state for Drawer
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      justifyContent="space-between"
      p="42px 7%"
      bg="red"
      color={color}
      fontSize="16px"
      fontWeight="600"
      pos="fixed"
    >
      <Link to="/" onClick={toWhite}>
        {color === "#fff" && (
          <Image
            src="src/assets/imgs/navbar/logo-white.svg"
            w={{ sm: "120px", lg: "150px" }}
          />
        )}
        {color === "#000" && (
          <Image
            src="src/assets/imgs/navbar/logo-black.svg"
            w={{ sm: "120px", lg: "150px" }}
          />
        )}
      </Link>

      <Flex gap="40px" display={{ base: "none", sm: "none", lg: "flex" }}>
        <NavLink
          style={onActive}
          className={styles.navlink}
          to="/company"
          onClick={toBlack}
        >
          Company
        </NavLink>
        <NavLink
          style={onActive}
          className={styles.navlink}
          to="/services"
          onClick={toBlack}
        >
          Our Services
        </NavLink>
        <NavLink
          style={onActive}
          className={styles.navlink}
          to="/contact-us"
          onClick={toBlack}
        >
          Contact us
        </NavLink>
      </Flex>

      <Flex alignItems="center" gap="7px" cursor="pointer" onClick={onOpen}>
        <Text>Menu</Text>
        {color === "#fff" && (
          <Image src="src/assets/imgs/navbar/menu-white.svg" />
        )}
        {color === "#000" && (
          <Image src="src/assets/imgs/navbar/menu-black.svg" />
        )}
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="full">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Text>Text</Text>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
