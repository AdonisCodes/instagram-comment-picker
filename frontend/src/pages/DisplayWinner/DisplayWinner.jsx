import AllWInners from "../../components/AllWinners";
import LoopRenderer from "../../components/LoopRenderer";
import { useState, useEffect } from "react";
import VideoRecorder from "../../components/VideoRecorder/VideoRecorder";
import { Flex } from "@chakra-ui/react";
import { BACKEND_URL, colors } from "../../config/config";
import axios from "axios";

export default function DisplayWinner({ giveawayRedirect }) {
    const [currentState, setCurrentState] = useState(localStorage.getItem('record') == 'true' ? -1 : 0)

    useEffect(() => {
        // Save the giveaway to the database column called ( Past Giveaways using the API/save route )
        const asyncf = async () => {
            const res = await axios.post(BACKEND_URL + "users/giveaway_save", {
                userID: localStorage.getItem('login'),
                giveaway: {
                    winners: JSON.parse(localStorage.getItem('winners')),
                    all: JSON.parse(localStorage.getItem('all')),
                }
            })
        }

        if (!giveawayRedirect) {
            asyncf()
        }

        // Ensure that it doesn't run on dismount
        return () => { }
    })

    return (
        <Flex justify='center' align='center' w='100vw' h='80vh' bg={colors.primary}>
            {currentState == -1 &&
                <VideoRecorder
                    setCurrentState={setCurrentState}
                    startRecording={true}
                    recordLength={20}
                ></VideoRecorder>}

            {currentState == 0 && <LoopRenderer items={JSON.parse(localStorage.getItem('all'))} setCurrentState={setCurrentState} />}
            {currentState == 1 && <AllWInners currentState={currentState} />}
        </Flex>
    )
}