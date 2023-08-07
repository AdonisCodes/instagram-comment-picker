import { Flex, Image, Heading, useBreakpointValue } from "@chakra-ui/react";
import logo from '../../assets/vite.png'
import { useState } from "react";
import HamburgerMenu from "../HamburgerMenu";

export default function Header({ setPage, page, user, credits}) {
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
                {page != 'login' && <HamburgerMenu user={user} setPage={setPage} /> }
            </Flex>
        </Flex>
    )
}