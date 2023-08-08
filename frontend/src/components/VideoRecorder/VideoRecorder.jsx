import React, { useState, useRef, useEffect } from "react";
import RecordRTC from "recordrtc";

const ScreenRecorder = ({ startRecording, setCurrentState, recordLength }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [seconds, setSeconds] = useState(recordLength); // Change this value to set recording duration

  const mediaStreamRef = useRef(null);
  const recordRTCRef = useRef(null);

  useEffect(() => {
    if (startRecording) {
      handleStartRecording();
    }
  }, [startRecording]);

  const handleStartRecording = async () => {
    try {
      const constraints = {
        video: {
          width: { ideal: 1920 }, // Set the desired width here
          height: { ideal: 1080 }, // Set the desired height here
          frameRate: { ideal: 30 }, // Set the desired frame rate here
        },
        audio: false,
      };

      const mediaStream = await navigator.mediaDevices.getDisplayMedia(constraints);
      mediaStreamRef.current = mediaStream;

      const options = {
        type: "video",
        mimeType: "video/webm;codecs=h264", // Change to 'video/mp4;codecs=h264' for MP4 format
        bitsPerSecond: 2500000, // Set a higher video bitrate here (e.g., 2500000 for 2.5Mbps)
      };

      recordRTCRef.current = new RecordRTC(mediaStream, options);
      setIsRecording(true);
      recordRTCRef.current.startRecording();

      mediaStream.getVideoTracks().forEach((track) => {
        track.onended = () => {
          stopRecording();
        };
      });

      setTimeout(() => {
        stopRecording();
      }, seconds * 1000);
    } catch (error) {
      console.error("Error starting recording:", error);
    }
    setCurrentState(0);
  };

  const stopRecording = () => {
    if (recordRTCRef.current) {
      recordRTCRef.current.stopRecording(() => {
        setIsRecording(false);

        const blob = recordRTCRef.current.getBlob();
        const url = URL.createObjectURL(blob);
        downloadRecording(url);
      });
    }

    if (mediaStreamRef.current) {
      const tracks = mediaStreamRef.current.getTracks();
      tracks.forEach((track) => track.stop());
    }
  };

  const downloadRecording = (url) => {
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = "screen-recording.webm"; // Change the filename and extension as needed
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div>
      <div>{startRecording && "Waiting to start Recording..."}</div>
    </div>
  );
};

export default ScreenRecorder;