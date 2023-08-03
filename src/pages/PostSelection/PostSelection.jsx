import { getUserPosts } from "./functions/Queries"
import { useEffect, useState } from "react"
import { Button, Flex, Spinner, Heading, useBreakpointValue } from "@chakra-ui/react"
import PostCard from "../../components/PostCard"

export default function PostSelection({ setPage }) {
    const [posts, setPosts] = useState([])
    const [isloading, setIsLoading] = useState(false)
    const [username] = useState(localStorage.getItem('user'))
    useEffect(() => {
        if (username) {
            getUserPosts(username, setIsLoading, setPosts)
        }
    }, [])



    console.log(posts)
    return (
        <Flex flexDir='column' justify='center' h='100vh' align='center' w='100vw' overflowX={'hidden'}>
            <Heading>Select Post</Heading>
            <Flex wrap='wrap' gap='4' justify='center' w='100%' mt='5'>
                {isloading ? <Spinner /> : posts.length < 1 ? <h1>No posts found</h1> : <Flex  justify={'center'} w='100%' wrap='wrap' gap='2' >{posts.map(post => (<PostCard key={post.node.shortcode} post={post.node} package={{ setPage }} />))}</Flex>}
            </Flex>
        </Flex>

    )
}