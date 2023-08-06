import { HamburgerIcon, StarIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { useState } from "react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react'

export default function HamburgerMenu({user}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <Menu>
            <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
            >
                <MenuButton as={HamburgerIcon} fontSize='45px' onClick={() => setIsMenuOpen(!isMenuOpen)} />
            </motion.div>
            <MenuList>
                <MenuItem><StarIcon /><span style={{marginRight: '10px'}}></span>Credits: {user?.credits}</MenuItem>
            </MenuList>
        </Menu>
    )
}