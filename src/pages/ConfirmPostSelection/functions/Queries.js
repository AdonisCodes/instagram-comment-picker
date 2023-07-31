import axios from "axios";
import { RAPIDAPI_KEY } from "../../../config/config";

// Fetch the post data from the api using axios, and saving the state and to localStorage
export const fetchPostData = async (postId, setPost, setIsLoading) => {
  console.log(postId);
  setIsLoading(true);
  const options = {
    method: "GET",
    url: "https://instagram-scraper-2022.p.rapidapi.com/ig/post_info/",
    params: {
      shortcode: postId,
    },
    headers: {
      "X-RapidAPI-Key": RAPIDAPI_KEY,
      "X-RapidAPI-Host": "instagram-scraper-2022.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    setPost(response.data);
  } catch (error) {
    console.error(error);
    setPage("home");
  }
  setIsLoading(false);
};


export const confirmFinal = (validity, setPage) => {
    if (validity == '0') {
        setPage('configure-giveaway-selection')
        return
    }
    setPage('home')
}