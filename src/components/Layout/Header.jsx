import { Flex, Image, Heading, useBreakpointValue } from "@chakra-ui/react";
import logo from '../../assets/vite.png'
import { HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Header({ setPage }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleMenuAction = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    // Handle breakpoints to ensure proper responsiveness
    const headingSize = useBreakpointValue({ base: '20px', md: '25px' })

    return (
        <Flex w='100%' h='fit-content' zIndex={'100'} pos='fixed' top='0' right='0' align='center' p='3' gap='3' bg='white'>
            <Image h='75px' src={logo} onClick={() => setPage('home')}></Image>
            <Heading onClick={() => setPage('home')} fontSize={headingSize}>IG Giveaway App</Heading>
            <Flex ml='auto' mr='10px' cursor={'pointer'}>
                <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: isMenuOpen ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <HamburgerIcon fontSize='45px' onClick={() => handleMenuAction()} />
                </motion.div>
            </Flex>
        </Flex>
    )
}