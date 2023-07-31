import { Card, CardHeader, Flex, Box, Heading, Text, CardBody, Avatar, Image, CardFooter, Button, IconButton } from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function CommentCard({ user }) {

  const [profilePic, setProfilePic] = useState('');

  // Function to fetch profile picture using the API
  const fetchProfilePic = async () => {
    const options = {
      method: 'GET',
      url: 'https://cors-proxy4.p.rapidapi.com/',
      params: {
        url: user.ownerProfilePicUrl + '?dont-block-me'
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
    <Card maxW='md'>
      <CardHeader>
        <Flex spacing='4'>
          <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
            <Avatar name={user.ownerUsername} src={profilePic} />

            <Box>
              <Heading size='sm'>{user.ownerUsername}</Heading>
              <Text>{user.text.slice(0, 30)}</Text>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
    </Card>
  )
}