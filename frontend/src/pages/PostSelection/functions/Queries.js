import axios from "axios";
import { RAPIDAPI_KEY } from "../../../config/config";

export const getUserPosts = async ( username, setIsLoading, setPosts ) => {
  setIsLoading(true);
  const options = {
    method: "GET",
    url: "https://instagram-scraper-2022.p.rapidapi.com/ig/posts_username/",
    params: { user: username },
    headers: {
      "X-RapidAPI-Key": RAPIDAPI_KEY,
      "X-RapidAPI-Host": "instagram-scraper-2022.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data.data.user.edge_owner_to_timeline_media.edges);
    setPosts(response.data.data.user.edge_owner_to_timeline_media.edges);
    setIsLoading(false);
  } catch (error) {
    console.error(error);
    setPosts([])
    setIsLoading(false);
  }

};

export const confirmPost = (shortCode, setPage) => {
  localStorage.setItem('shortCode', shortCode)
  setPage('confirm-post-selection')
}