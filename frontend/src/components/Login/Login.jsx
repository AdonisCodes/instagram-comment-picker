import React, { useState } from 'react';
import FacebookLogin from '@greatsumini/react-facebook-login';
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import { BACKEND_URL, META_APP_ID, colors } from '../../config/config';
import axios from 'axios';

function Login({ setPage, setUser, setCredits }) {
  const [login, setLogin] = useState(false);
  const [didFail, setDidFail] = useState(false);

  const responseFacebook = async (response) => {
    console.log(response);
    if (response.accessToken) {
      localStorage.setItem("login", response.userID)
      setUser(localStorage.getItem('login'))
      // Pull the credits from the database using the userid
      const res = await axios.post(BACKEND_URL + 'users', {
        userID: localStorage.getItem('login')
      })
      console.log(res.data)
      if (res.data.length > 0) {
        localStorage.setItem('credits', res.data[0].credits)
        setCredits(localStorage.getItem('credits'))
        setPage('home')

      }
    }
  };

  return (
    <Flex h='60vh' bg={colors.primary} align='center' justify='center'>
      {!login && (
        <Button bg='transparent' border='2px solid white' rounded={'full'} color='white' _hover={{ color: "black", background: "white" }}>
          <FacebookLogin
            appId={META_APP_ID}
            autoLoad={false}
            fields="name,picture"
            onSuccess={responseFacebook}
            onFail={() => setDidFail(true)}
            textButton="Login with Facebook"
          />
        </Button>
      )}

      {login && (
        <Box p={4}>
          {didFail && <Text color="red.500">Failed to login, Try Again!</Text>}
        </Box>
      )}
    </Flex>
  );
}

export default Login;
