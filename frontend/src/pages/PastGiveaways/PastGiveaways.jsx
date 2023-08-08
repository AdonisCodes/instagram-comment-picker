import { Button, Flex, Heading, Spinner } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { BACKEND_URL, colors } from "../../config/config"
import axios from "axios"

export default function PastGiveaways({ setPage, setGiveawayRedirect }) {
    const [giveaways, setGiveaways] = useState([])
    const [someError, setSomeError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        console.log('running')
        // Fetch data from the giveaways endpoint to get all the past giveaways that the user did
        // Load them all Using Just the date
        const asyncf = async () => {
            console.log("running 2")
            setIsLoading(true)

            try {
                console.log('1')
                const res = await axios.post(BACKEND_URL + "users/giveaways", {
                    userID: localStorage.getItem('login')
                })
                console.log('1')
                console.log(res)
                setGiveaways(res.data)
            } catch (e) {
                console.log(e)
                setSomeError(true)
            }
            setIsLoading(false)
        }

        asyncf();

    }, [])

    return (
        <Flex align='center' justify={'start'} flexDir={'column'} bg={colors.primary} p='2' w='100vw'>
            <Heading size={'md'} color={colors.textPrimary}>Past Giveaways</Heading>
            <Flex align='center' justify='center' textAlign={'center'} gap='2' h='500px' overflowY={'scroll'} h='400px' wrap='wrap'>

                {isLoading ? <Spinner /> : giveaways.map((giveaway) => (
                    <Button _hover={{ background: 'white', color: 'black' }} bg="transparent" border='2px solid white' w='200px' color={colors.textPrimary} p='2' key={giveaway.created_at} onClick={() => {
                        localStorage.setItem('all', JSON.stringify(JSON.parse(giveaway.giveaway).all))
                        localStorage.setItem('winners', JSON.stringify(JSON.parse(giveaway.giveaway).winners))
                        setGiveawayRedirect(true)
                        setPage('display-winner')
                    }}>{giveaway.created_at.slice(0, 19).replace("T", " | ")}</Button>
                ))}
            </Flex>
        </Flex>
    )
}