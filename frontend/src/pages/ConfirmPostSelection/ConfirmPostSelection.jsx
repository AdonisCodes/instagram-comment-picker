import { AtSignIcon, ChatIcon, CheckIcon, CloseIcon, Icon, StarIcon } from "@chakra-ui/icons";
import { Card, CardBody, Stack, Heading, Text, Divider, Image, CardFooter, Button, IconButton, Flex, Spinner } from "@chakra-ui/react"
import axios from "axios"
import { useState, useEffect } from "react";
import { confirmFinal } from "./functions/Queries";
import { fetchPostData } from "./functions/Queries";
import { colors } from "../../config/config";
import loading from '../../assets/loading.gif'

export default function ConfirmPostSelection({ setPage, setCredits }) {
  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState({})
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
    <Flex flexDir={'column'} justify={'center'} align='center' w='100%' h='80vh' bg={colors.primary}>
      <Heading mb='5' color={colors.textPrimary}>Confirm Post</Heading>
      {isLoading ? <Spinner /> : <Card size='sm' w='fit-content' bg='transparent'>
        <Flex gap='5'>
          <Image
            src={profilePic}
            alt={post}
            borderRadius='lg'
            w='175px'
            h='175px'
            objectFit='cover'
            fallbackSrc={loading}
          />

        </Flex>
        <Flex align={'center'} justify={'center'} w='100%' gap='3' pos='absolute' bottom='-20px'>
          <IconButton icon={<CheckIcon />} bg='green.400' h='50px' w='50px' onClick={() => { confirmFinal('0', setPage, setCredits) }} />
          <IconButton icon={<CloseIcon />} bg='red.400' h='50px' w='50px' onClick={() => { confirmFinal('1', setPage, setCredits) }} />
        </Flex>
      </Card>}
    </Flex>
  )
}