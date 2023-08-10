import { Flex, Box, Heading, Input, Text, Checkbox, Divider, Button, IconButton, Spinner, useBreakpointValue } from "@chakra-ui/react";
import { useEffect } from "react";
import { get_all_comments, useCommentConfig } from "./functions/Queries";
import { useState } from "react";
import CommentCard from "../../components/CommentCard";
import { RangeDatepicker } from "chakra-dayzed-datepicker";
import { CheckIcon } from "@chakra-ui/icons";
import { colors } from "../../config/config";

export default function ConfigureGiveawaySelection({ setPage, setGiveawayRedirect, user }) {
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([])

  useEffect(() => {
    setIsLoading(true)
    async function asyncfunc() {
      const items = await get_all_comments(localStorage.getItem('shortCode'))
      setComments(await items)
      setIsLoading(false)
    }

    asyncfunc();
  }, [])

  const [selectedDates, setSelectedDates] = useState([new Date("2012-01-01"), new Date(Date.now())]);
  const [winners, setWinners] = useState(1);
  const [winnersArray, setWinnersArray] = useState([])
  const [removeDuplicates, setRemoveDuplicates] = useState(false);
  const [filterHashtags, setFilterHashtags] = useState('');
  const [mentioned, setMentioned] = useState(0);
  const [keywords, setKeywords] = useState('');
  const [manualExclude, setManualExclude] = useState('');
  const [screenRecord, setScreenRecord] = useState(false);


  // mobile styles
  const containerHeight = useBreakpointValue({ 'base': '100%', 'md': 'fit-content' })
  const innerChildMaxWidth = useBreakpointValue({ 'base': '100%', 'md': '500px' })
  const renderScreenRecorder = useBreakpointValue({ 'base': false, 'md': true })
  useState(() => {
    localStorage.setItem('record', screenRecord)
  }, [screenRecord])

  return (
    <Flex flexDir={'column'} wrap='wrap' bg={colors.primary} color={colors.textPrimary} p='5' h={containerHeight} align={'center'} justify='center'>
      <Flex gap='5' wrap='wrap' align='center' justify='center' >
        <Flex overflowY='scroll' h='500px' w={innerChildMaxWidth} flexDir={'column'} gap='3' justify={isLoading ? 'center' : 'start'} align='center' >
          {isLoading ? <Box textAlign='center'><Spinner /> <br /> Loading Comments</Box> : comments.length > 0 && comments?.map((comment) => (<CommentCard key={comment.id} user={comment} />))}
        </Flex>
        <Flex flexDir={'column'} gap='1' p='1' >
          <Flex align={'center'} gap='1'>
            <Heading size='md'>Winners</Heading>
            <Input type="number" min={1} max={3} onChange={(e) => setWinners(e.target.value)} w='fit-content' defaultValue={1} />
            <Text fontSize='10'>max {3}</Text>
          </Flex>

          <Flex align={'center'} gap='1'>
            <Heading size='md'>Remove Duplicates</Heading>
            <Checkbox ml='auto' onChange={(e) => setRemoveDuplicates(e.target.checked)} />
          </Flex>

          <Flex gap='1' flexDir={'column'}>
            <Heading size='md'>Filter Hashtags</Heading>
            <Input w={"100%"} placeholder={'#1, #2, #3, #4'} onChange={(e) => setFilterHashtags(e.target.value)} />
            <Text fontSize={'10px'}>Default: All</Text>
          </Flex>

          <Flex align={'center'}>
            <Heading size='md' mr='auto'> @Mentioned-Someone</Heading>
            <Checkbox ml='auto' onChange={(e) => setMentioned(e.target.checked)} />
          </Flex>

          <Flex flexDir={'column'} gap='1'>
            <Heading size='md' mr='auto'> Keywords Included </Heading>
            <Input w={"100%"} placeholder={'Word 1, Word 2, Word 3'} onChange={(e) => setKeywords(e.target.value)} />
            <Text fontSize={'10px'}>Default: All</Text>
          </Flex>

          <Flex flexDir={'column'} gap='1'>
            <Heading size='md'>Comments Between Dates:</Heading>
            <RangeDatepicker
              minDate={new Date("2012-12-02")}
              maxDate={new Date(Date.now())}
              selectedDates={selectedDates}
              onDateChange={setSelectedDates}
            />
          </Flex>

          <Flex gap='1' flexDir={'column'}>
            <Heading size='md'>Exclude Users</Heading>
            <Input w={"100%"} placeholder={'@1, @2, @3, @4'} onChange={(e) => setManualExclude(e.target.value)} />
            <Text fontSize={'10px'}>Default: None</Text>
          </Flex>

          {renderScreenRecorder &&
            <Flex gap='1'>
              <Heading size='md'>Record Giveaway</Heading>
              <Checkbox ml='auto' onChange={(e) => localStorage.setItem('record', e.target.checked)} />
            </Flex>
          }

          <Button bg='green.400' p='3' onClick={() => {
            if (!isLoading) {
              useCommentConfig(comments, Number(winners), removeDuplicates, filterHashtags, mentioned, keywords, selectedDates, manualExclude, setPage, user)
              setGiveawayRedirect(false)
            }

          }}>
            {isLoading ? <Spinner /> : <CheckIcon />}

          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}