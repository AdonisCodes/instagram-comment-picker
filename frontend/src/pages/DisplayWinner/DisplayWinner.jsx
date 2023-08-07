import AllWInners from "../../components/AllWinners";
import LoopRenderer from "../../components/LoopRenderer";
import { useState, useEffect } from "react";
import VideoRecorder from "../../components/VideoRecorder/VideoRecorder";
import { Flex } from "@chakra-ui/react";
import { colors } from "../../config/config";

export default function DisplayWinner() {
    const [currentState, setCurrentState] = useState(localStorage.getItem('record') == 'true' ? -1 : 0)


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