import { getUserPosts } from "./functions/Queries"
import { useEffect, useState } from "react"
import { Button, Flex, Spinner, Heading, useBreakpointValue } from "@chakra-ui/react"
import PostCard from "../../components/PostCard"
import {colors} from '../../config/config'

export default function PostSelection({ setPage }) {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [username] = useState(localStorage.getItem('user'))
    useEffect(() => {
        if (username) {
            getUserPosts(username, setIsLoading, setPosts)
        }
    }, [])



    console.log(posts)
    return (
        <Flex flexDir='column' h='100vh' alignItems={'center'} bg={colors.primary} justify={isLoading ? 'center' : 'start'} overflowX={'hidden'} >
            <Heading color={colors.textPrimary} mt='10px'>Select Post</Heading>
            <Flex wrap='wrap' gap='10' justify='center' mt='5'>
                {isLoading ? <Spinner /> : posts.length < 1 ? <h1>No posts found</h1> : <Flex  justify={'center'} wrap='wrap' gap='2' w='100vw' align='center'  >{posts.map(post => (<PostCard key={post.node.shortcode} post={post.node} package={{ setPage }} />))}</Flex>}
            </Flex>
        </Flex>

    )
}