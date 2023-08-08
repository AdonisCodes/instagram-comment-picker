import axios from "axios";
import { BACKEND_URL, RAPIDAPI_KEY } from "../../../config/config";

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

export const confirmFinal = async (validity, setPage) => {
  if (validity == "0") {
    // Subract a credit
    try {
      let response = await axios.post(BACKEND_URL + "users/subract", {
        userID: localStorage.getItem("login"),
        headers: { "Content-Type": "application/json" },
      });

      if (response.status == 429) {
        console.log("failed to subract credit");
        setPage("payment");
      } else {
        console.log('got credits working')
        localStorage.setItem("credits", response.data[0].credits);
        setPage("configure-giveaway-selection");
        return
      }
    } catch (e) {
      console.log('some error')
      console.log(e);
      setPage("payment");
      return
    }
  }
  console.log('stupid logic')
  setPage("home");
};

