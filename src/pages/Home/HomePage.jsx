import Search from "../../components/Search";
import axios from 'axios'
import { useState } from "react";
import { Flex, Heading, Image, Spinner } from "@chakra-ui/react";
import UserCard from "../../components/UserCard";
import ConfirmSelection from "../../components/ConfirmSelection";
import { handleConfirmation, searchOnClick } from "./functions/Queries";
import logo from '../../assets/vite.png'

export default function HomePage({ setPage }) {
  const [user, setUser] = useState(null)
  const [isloading, setIsLoading] = useState(false)

  

  return (
    <Flex flexDir={'column'} justify={'center'} align={'center'}>
      <Image w='200px' src={logo}></Image>
      <Heading>Instagram Giveaway Picker</Heading>
      {isloading ? <Spinner /> : user ? <Flex flexDir='column'>
        <UserCard user={user} />
        <ConfirmSelection handleConfirmation={handleConfirmation} package={{setPage, setUser, user}} />
      </Flex> : <Search setPage={setPage} searchOnClick={searchOnClick} package={{ setIsLoading, setUser, setPage }} />}
    </Flex>
  )
}