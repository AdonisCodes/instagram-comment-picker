import Search from "../../components/Search";
import axios from 'axios'
import { useState } from "react";
import { Flex, Heading, Image, Spinner, Text, useBreakpointValue } from "@chakra-ui/react";
import UserCard from "../../components/UserCard";
import ConfirmSelection from "../../components/ConfirmSelection";
import { handleConfirmation, searchOnClick } from "./functions/Queries";
import { colors } from "../../config/config";

export default function HomePage({ setPage }) {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const mainSizeBreakpoints = useBreakpointValue({ base: '80vh', sm: '100vh', md: '60vh' })


  return (
    <Flex flexDir={'column'} justify={'center'} align={'center'} h={mainSizeBreakpoints} bg={colors.primary} color={colors.textPrimary}>
      {!user && <>
        <Heading textAlign={'center'}>Instagram Giveaway Picker</Heading>
        <Text>Instagram Giveaways, sweepstakes & freebies</Text></>}


      <Flex h='fit-content' w='100%' flexDir={'column'} align={'center'} justify='center' p='3'>
        {!user && <Search setPage={setPage} searchOnClick={searchOnClick} package={{ setIsLoading, setUser, setPage }} isLoading={isLoading} />}
        {user && <>
          <UserCard user={user} />
          <ConfirmSelection handleConfirmation={handleConfirmation} package={{ setPage, setUser, user }} />
        </>}
      </Flex>
    </Flex>
  )
}