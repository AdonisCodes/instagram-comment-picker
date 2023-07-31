import axios from "axios";
import { RAPIDAPI_KEY } from "../../../config/config";

export const searchOnClick = async (input, setIsLoading, setUser, setPage) => {
    setIsLoading(true)
    if (input.startsWith('@')) {
      const username = input.substring(1)
      const options = {
        method: 'GET',
        url: 'https://instagram-scraper-2022.p.rapidapi.com/ig/info_username/',
        params: {
          user: username
        },
        headers: {
          'X-RapidAPI-Key': RAPIDAPI_KEY,
          'X-RapidAPI-Host': 'instagram-scraper-2022.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        let username = response.data?.user?.username
        
        if (!username) { 
          throw new Error('User not found')
        }
        
        setUser(response.data)
      } catch (error) {
        console.error(error);
        setIsLoading(false)
        setUser(false)
      }
    } else {
      console.log('false')
      const shortCode = input.slice(-1) == '/' ? input.slice(0, -1).slice(-11) : input.slice(-11)
      localStorage.setItem('shortCode', shortCode)
      setPage('confirm-post-selection')    
      setIsLoading(false)
    }
    setIsLoading(false)
  }

export const handleConfirmation = (confirmation, setPage, setUser, user) => {
    // If the confirmation status is true, then redirect to the post selection page
    setUser(null)

    if (confirmation == '1') {
        setPage('post-selection')
        localStorage.setItem('user', user['user']['username'])
        return
    }

    // Else Redirect to the Homepage, by setting the state to 'home'
    setPage('home')
}