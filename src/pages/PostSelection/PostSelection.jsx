import { getUserPosts } from "./functions/Queries"
import { useEffect, useState } from "react"
import { Button, Flex, Spinner, Heading } from "@chakra-ui/react"
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
        <Flex flexDir='column' align='center' justify='center' h='100%'>
            <Heading>Select Post</Heading>
            <Flex wrap='wrap' gap='4' align='center' justify='center' w='100%' mt='5'>
                {isloading ? <Spinner /> : posts.length < 1 ? <h1>No posts found</h1> : posts.map(post => (<PostCard key={post.node.shortcode} post={post.node} package={{ setPage }} />))}
            </Flex>
        </Flex>

    )
}