import { Flex, Heading } from "@chakra-ui/react";
import WinnerCard from "../WinnerCard";
import Confetti from 'react-confetti'
import { useEffect } from "react";

export default function AllWInners({ currentState }) {
    const winners = JSON.parse(localStorage.getItem('winners'));
    return (
        <Flex flexDir={'column'} align='center' justify='center' gap='3'>
            <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
            />
            <Heading>Winner/s</Heading>
            <Flex wrap='wrap' gap='3' align='center' justify='center'>
                {winners && winners.map((winner, index) => (
                    <WinnerCard key={index} user={winner} />
                ))}
                {winners.length < 1 && <h1>No winners found, Filtered out to much!</h1>}
            </Flex>
        </Flex>
    )
}
