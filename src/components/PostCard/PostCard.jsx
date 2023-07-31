import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { Card, CardBody, Stack, Heading, Text, Divider, ButtonGroup, Image, CardFooter, Button, IconButton, Flex } from "@chakra-ui/react"
import axios from "axios"
import { useState, useEffect } from "react";
import { confirmPost } from "../../pages/PostSelection/functions/Queries";


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
        <Card size='sm' w='150px' h='275px'>
            <CardBody >
                <Image
                    src={profilePic}
                    alt={post.edge_media_to_caption?.edges[0].node.text}
                    borderRadius='lg'
                    w='100%'
                    h='130px'
                    objectFit='cover'
                />
                <Stack mt='1.5'>
                    <Text fontSize='15px'>{post.edge_media_to_caption?.edges[0].node.text.slice(0, 20) + '...'}</Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <Flex align={'center'} justify={'center'} w='100%' gap='3'>
                    <IconButton icon={<CheckIcon />} bg='green.400' w='100%' onClick={() => confirmPost(post.shortcode, setPage)} />
                </Flex>
            </CardFooter>
        </Card>
    )
}