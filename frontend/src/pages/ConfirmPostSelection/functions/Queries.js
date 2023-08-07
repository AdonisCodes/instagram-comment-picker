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


export const confirmFinal = async (validity, setPage, setCredits) => {
    if (validity == '0') {
        // Subract a credit
        try {
          
          let response = axios.post(BACKEND_URL + '/users/subract', {
            data: {
              userID: localStorage.getItem('userID'),
            },
            headers: {'Content-Type': 'application/json'},
          })

          if ((await response).status == 429) {
            console.log('failed to subract credit')
            setPage('payment')
          } else {
            localStorage.setItem('credits', (await response).data[0].credits)
            setCredits((await response).data[0].credits)
            setPage('configure-giveaway-selection')
          }
        } catch (e) {
          console.log(e)
          setPage('payment')
        }
    }

    setPage('home')
}