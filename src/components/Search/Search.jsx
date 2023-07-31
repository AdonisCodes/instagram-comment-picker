import { Flex, Icon, Input, Button, Text } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useState } from "react";

export default function Search({ setPage, searchOnClick, isLoading, package: { setIsLoading, setUser} }) {
  const [input, setInput] = useState('');

  // Regular expression to match Instagram URL pattern
  const instagramUrlPattern = /^(?:https?:\/\/)?(?:www\.)?instagram\.com\/p\/\w+\/?$/i;

  return (
    <Flex flexDir='column' align='center' justify='center'>
      <Flex align='center' mt='5vh' spacing='2vh'>
        <Input
          placeholder='Enter @username or Post Link'
          onChange={(e) => setInput(e.target.value)}
        />
        {input.startsWith('@') || instagramUrlPattern.test(input) ? (
          <Button onClick={() => searchOnClick(input, setIsLoading, setUser, setPage)}>
            <Search2Icon />
          </Button>
        ) : null}

      </Flex>
      {input.length > 0 && !input.startsWith('@') && !instagramUrlPattern.test(input) ? (
        <Text mt='2vh'>Invalid Input</Text>
      ) : null}
      <Text pt='5vh'>
        Formats allowed are @username or https://instagram.com/p/postid
      </Text>
    </Flex>
  );
}
