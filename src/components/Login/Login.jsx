import React, { useState } from 'react';
import FacebookLogin from '@greatsumini/react-facebook-login';
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import { colors } from '../../config/config';

function Login({setPage, setUser}) {
  const [login, setLogin] = useState(false);
  const [didFail, setDidFail] = useState(false);

  const responseFacebook = (response) => {
    console.log(response);
    if (response.accessToken) {
     localStorage.setItem("login", response.userID)
      setUser({'id': localStorage.getItem('login'), credits: 5})
      setPage('home')
    }
  };

  return (
    <Flex h='60vh' bg={colors.primary} align='center' justify='center'>
      {!login && (
        <Button bg='transparent' border='2px solid white' rounded={'full'} color='white' _hover={{ color: "black", background: "white" }}>
            <FacebookLogin
              appId="246860718248950"
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
