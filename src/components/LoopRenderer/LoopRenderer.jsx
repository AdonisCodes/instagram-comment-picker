import React, { useState, useEffect } from "react";
import axios from "axios";
import { Avatar, Image } from "@chakra-ui/react";

const LoopRenderer = ({ items, setCurrentState }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const loopDuration = 5000; // 10 seconds in milliseconds
    const itemDuration = loopDuration / items.length;
    const [elapsedTime, setElapsedTime] = useState(0);
    const [profilePic, setProfilePic] = useState('');

    // Function to fetch profile picture using the API
    const fetchProfilePic = async (profile_pic_url) => {
        const options = {
            method: 'GET',
            url: 'https://cors-proxy4.p.rapidapi.com/',
            params: {
                url: profile_pic_url + '?dont-block-me'
            },
            headers: {
                'X-RapidAPI-Key': '2f813d12demsh03b080f73d09179p1d72b3jsn6704c5a7f22a',
                'X-RapidAPI-Host': 'cors-proxy4.p.rapidapi.com'
            },
            responseType: 'blob', // Set the response type to 'blob' to get the image data as a blob
        };

        try {
            const response = await axios.request(options);

            // Convert the blob data to a data URL
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePic(reader.result);
            };
            reader.readAsDataURL(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (items.length === 0 || elapsedTime >= loopDuration) {
            setCurrentState(1)
        };

        const timer = setInterval(() => {
            setElapsedTime((prevElapsedTime) => prevElapsedTime + itemDuration);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
            
        }, itemDuration);

        return () => clearInterval(timer);
    }, [items, elapsedTime]);

    return (
        <div>
            {items.map((item, index) => (
                <div key={index} style={{ display: index === currentIndex ? "block" : "none" }}>
                    <Avatar name={item.ownerUsername.slice(0, item.ownerUsername.length / 2) + " " + item.ownerUsername.slice(item.ownerUsername.length / 2, item.length)} /> {/* Use the profilePic state as the src for Avatar */}
                </div>
            ))}
        </div>
    );
};

export default LoopRenderer;
