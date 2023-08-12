import React, { useState } from 'react';
import FacebookLogin from '@greatsumini/react-facebook-login';
import { Box, Button, Flex, Heading, Image, Input, Spinner, Text } from '@chakra-ui/react';
import { BACKEND_URL, META_APP_ID, colors } from '../../config/config';
import axios from 'axios';

function Login({ setPage, setUser, setCredits }) {
  const [login, setLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [didFail, setDidFail] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const responseFacebook = async (response) => {
  //   console.log(response);
  //   if (response.accessToken) {
  //     localStorage.setItem("login", response.userID)
  //     setUser(localStorage.getItem('login'))
  //     // Pull the credits from the database using the userid
  //     const res = await axios.post(BACKEND_URL + 'users', {
  //       userID: localStorage.getItem('login')
  //     })
  //     console.log(res.data)
  //     if (res.data.length > 0) {
  //       localStorage.setItem('credits', res.data[0].credits)
  //       setCredits(localStorage.getItem('credits'))
  //       if (localStorage.getItem('all')) { setPage('display-winner') } else { setPage('payment')}
  //     }
  //   }
  // };

  const responseSuccess = async () => {
    setIsLoading(true)
    let userID = localStorage.getItem('login')

    if (!userID) {
      userID =  Math.floor(Math.random() * 100000000)
      localStorage.setItem("login", userID)
    }

      const res = await axios.post(BACKEND_URL + 'users', {
        userID: userID
      })
      console.log(res.data)
      if (res.data.length > 0) {
        localStorage.setItem('credits', res.data[0].credits)
        setCredits(localStorage.getItem('credits'))
        if (localStorage.getItem('all')) { setPage('display-winner') } else { setPage('payment')}
      }
      setIsLoading(false)
      setUser(res.data[0])
    }

  return (
    <Flex h='60vh' bg={colors.primary} align='center' justify='center' flexDir='column' gap='5' p='5'>
      {/* {!login && (
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
      )} */}

      <Heading>Account?</Heading>
      <Input placeholder='email' />
      <Input placeholder='password' />
      <Button onClick={() => responseSuccess()}>{isLoading ? <Spinner /> : "Authenticate" }</Button>
      <Box p={4}>
          {didFail && <Text color="red.500">Failed to login, Try Again!</Text>}
      </Box>
    </Flex>
  );
}

export default Login;
