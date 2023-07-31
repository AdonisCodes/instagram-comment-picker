import { Flex, Heading } from '@chakra-ui/react'
import { useState } from 'react'
import Search from './components/Search'
import HomePage from './pages/Home'
import PostSelection from './pages/PostSelection'
import ConfirmPostSelection from './pages/ConfirmPostSelection/ConfirmPostSelection'
import ConfigureGiveawaySelection from './pages/ConfigureGiveawaySelection'
import DisplayWinner from './pages/DisplayWinner'

function App() {
  const [page, setPage] = useState('home')

  return (
    <Flex flexDir='column' p='2vh'>
      {/* home -> is the homepage of the application, this contains the funcitonality to search for a user and confirm */}
      {page === 'home' && <HomePage setPage={setPage} />}

      {/* post-selection -> is the page where the user can select a post from the user they searched for */}
      {page === 'post-selection' && <PostSelection setPage={setPage} />}

      {/* Confirm post selection */}
      {page === 'confirm-post-selection' && <ConfirmPostSelection setPage={setPage} /> }

      {/* Configure Giveaway Settings */}
      {page === 'configure-giveaway-selection' && <ConfigureGiveawaySelection setPage={setPage}/>}

      {/* Display random winner, show confetti, and recorded -> saved */}
      {page === 'display-winner' && <DisplayWinner />}
    </Flex>
  )
}

export default App
