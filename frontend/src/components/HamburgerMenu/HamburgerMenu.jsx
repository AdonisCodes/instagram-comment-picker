import { ExternalLinkIcon, HamburgerIcon, RepeatClockIcon, StarIcon, ViewIcon } from "@chakra-ui/icons";
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

export default function HamburgerMenu({ user, setPage }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <Menu>
            {!(user == null || user == undefined) ?
                <>
                    <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: isMenuOpen ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <MenuButton as={HamburgerIcon} fontSize='45px' onClick={() => setIsMenuOpen(!isMenuOpen)} />
                    </motion.div>


                    <MenuList onClick={() => setIsMenuOpen(false)}>
                        <>
                            <MenuItem onClick={() => { setPage('home') }}><ExternalLinkIcon /><span style={{ marginRight: '10px' }}></span>Home</MenuItem>
                            <MenuItem onClick={() => { setPage('payment') }}><StarIcon /><span style={{ marginRight: '10px' }}></span>Credits: {localStorage.getItem('credits')}</MenuItem>
                            <MenuItem onClick={() => { setPage('past-giveaways') }}><RepeatClockIcon /><span style={{ marginRight: '10px' }}></span>Past Giveaways</MenuItem>
                        </>
                    </MenuList></>
                : <></>
            }

        </Menu>
    )
}