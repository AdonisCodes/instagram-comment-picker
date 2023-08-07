import { ChatIcon, CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { Card, CardBody, Stack, Heading, Text, Divider, ButtonGroup, Image, CardFooter, Button, IconButton, Flex, Box } from "@chakra-ui/react"
import axios from "axios"
import { useState, useEffect } from "react";
import { confirmPost } from "../../pages/PostSelection/functions/Queries";
import loadingGif from '../../assets/loading.gif'

export default function PostCard({ post, package: { setPage } }) {
    const [profilePic, setProfilePic] = useState('');

    // Function to fetch profile picture using the API
    const fetchProfilePic = async () => {
        const options = {
            method: 'GET',
            url: 'https://cors-proxy4.p.rapidapi.com/',
            params: {
                url: post.display_url + '?dont-block-me'
            },
            headers: {
                'X-RapidAPI-Key': '2f813d12demsh03b080f73d09179p1d72b3jsn6704c5a7f22a',
                'X-RapidAPI-Host': 'cors-proxy4.p.rapidapi.com'
            },
            responseType: 'blob', // Set the response type to 'blob' to get the image data as a blob
        };

        try {
            const response = await axios.request(options);

            // Convert the blob data to a data URL
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePic(reader.result);
            };
            reader.readAsDataURL(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    // Fetch the profile picture on component mount
    useEffect(() => {
        fetchProfilePic();
    }, []);

    return (
        <Card size='sm' h='' bg='transparent' onClick={() => confirmPost(post?.shortcode, setPage)} cursor='pointer'>
            <CardBody border='none'>
                <Image
                    src={profilePic}
                    alt={post.edge_media_to_caption?.edges[0].node.text}
                    borderRadius='lg'
                    w='130px'
                    h='130px'
                    objectFit='cover'
                    fallbackSrc={loadingGif}
                />
                <Box borderRadius="3xl" bg='gray.800' w='70px' pos='absolute' bottom='-6px' right='40px' color='white' textAlign='center' p='1' cursor='pointer'>
                    {post?.edge_media_to_comment.count} <ChatIcon />
                </Box>
            </CardBody>
        </Card>
    )
}