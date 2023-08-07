import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { Flex, IconButton } from "@chakra-ui/react";

export default function ConfirmSelection({ handleConfirmation, package: {setPage, setUser, user} }) {
    return (
        <Flex flexDir='row' align='center' justify='center' gap='2vh' mt='2vh'>
            <IconButton bg='green.400' icon={<CheckIcon />} onClick={() => handleConfirmation('1', setPage, setUser, user)}></IconButton>
            <IconButton bg='red.400' icon={<CloseIcon />} onClick={() => handleConfirmation('0', setPage, setUser, user)}></IconButton>
        </Flex>
    )
}