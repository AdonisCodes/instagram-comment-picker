import { useState, useEffect } from 'react'; // Import useState and useEffect hooks
import { Avatar, Box, Card, CardBody, CardHeader, Flex, Heading, Text } from '@chakra-ui/react';
import axios from 'axios';

export default function UserCard(props) {
  const user = props['user']['user'];
  const { username, full_name, profile_pic_url, media_count, biography, follower_count, following_count } = user;
  const [profilePic, setProfilePic] = useState('');

  // Function to fetch profile picture using the API
  const fetchProfilePic = async () => {
    const options = {
      method: 'GET',
      url: 'https://cors-proxy4.p.rapidapi.com/',
      params: {
        url: profile_pic_url + '?dont-block-me'
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
    <Card maxW='md' mt='5vh'>
      <CardHeader>
        <Flex spacing='4'>
          <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
            <Avatar name={full_name} src={profilePic} /> {/* Use the profilePic state as the src for Avatar */}
            <Box>
              <Heading size='sm'>{full_name}</Heading>
              <Heading size='sm'>@{username}</Heading>
              <Text>{biography}</Text>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Flex gap={'5vh'}>
          <Text fontWeight='bold'>Posts: {media_count}</Text>
          <Text fontWeight='bold'>Followers: {follower_count}</Text>
          <Text fontWeight='bold'>Following: {following_count}</Text>
        </Flex>
      </CardBody>
    </Card>
  );
}
