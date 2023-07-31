import { AtSignIcon, ChatIcon, CheckIcon, CloseIcon, Icon, StarIcon } from "@chakra-ui/icons";
import { Card, CardBody, Stack, Heading, Text, Divider, Image, CardFooter, Button, IconButton, Flex, Spinner } from "@chakra-ui/react"
import axios from "axios"
import { useState, useEffect } from "react";
import { confirmFinal } from "./functions/Queries";
import { fetchPostData } from "./functions/Queries";

export default function ConfirmPostSelection({ setPage }) {
  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState({});
  const [profilePic, setProfilePic] = useState();

  // Function to fetch profile picture using the API
  const fetchProfilePic = async () => {
    const options = {
      method: 'GET',
      url: 'https://cors-proxy4.p.rapidapi.com/',
      params: {
        url: post?.display_url + '?dont-block-me'
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
      console.log(error);
    }
  };

  // Fetch the post data using the shortcode stored in localStorage
  useEffect(() => {
    fetchPostData(localStorage.getItem('shortCode'), setPost, setIsLoading);
  }, []);

  useEffect(() => {
    if (isLoading) return;
    fetchProfilePic();
  }, [post])
  return (
    <Flex flexDir={'column'}>
      <Heading mb='5'>Confirm Post</Heading>
      {isLoading ? <Spinner /> : <Card size='sm' w='fit-content'>
        <CardBody >
          <Flex gap='5'>
            <Image
              src={profilePic}
              alt={post}
              borderRadius='lg'
              w='130px'
              h='130px'
              objectFit='cover'
            />
            <Flex flexDirection={'column'}>
              <Text fontSize='15px' mb='2.5'>{post?.edge_media_to_caption?.edges[0]?.node.text.slice(0, 15)} <br /> {post?.edge_media_to_caption?.edges[0]?.node.text.slice(15, 25) + ' ...'} </Text>
              <Text fontSize='15px'><ChatIcon />  {post?.edge_media_to_comment?.count || 'N/A'}</Text>
              <Text fontSize='15px'><StarIcon />  {post?.edge_media_preview_like?.count || 'N/A'}</Text>
              <Text fontSize='15px'><AtSignIcon /> {localStorage.getItem('user') || 'N/A'}</Text>
            </Flex>

          </Flex>
        </CardBody>
        <Divider />
        <CardFooter>
          <Flex align={'center'} justify={'center'} w='100%' gap='3'>
            <IconButton icon={<CheckIcon />} bg='green.400' w='100%' onClick={() => { confirmFinal('0', setPage, )}} />
            <IconButton icon={<CloseIcon />} bg='red.400' w='100%' onClick={() => {confirmFinal('1', setPage)}} />
          </Flex>
        </CardFooter>
      </Card>}
    </Flex>
  )
}