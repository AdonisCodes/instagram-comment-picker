import { Flex, Heading } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import HomePage from './pages/Home'
import PostSelection from './pages/PostSelection'
import ConfirmPostSelection from './pages/ConfirmPostSelection/ConfirmPostSelection'
import ConfigureGiveawaySelection from './pages/ConfigureGiveawaySelection'
import DisplayWinner from './pages/DisplayWinner'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'


function App() {
  const [page, setPage] = useState('configure-giveaway-selection')

  return (
    <Flex flexDir={'column'} h='100vh' overflowX={'hidden'} >
    <Header setPage={setPage}/>
    <Flex flexDir='column' mt='99px'>
      {/* home -> is the homepage of the application, this contains the funcitonality to search for a user and confirm */}
      {page === 'home' && <HomePage setPage={setPage} />}

      {/* post-selection -> is the page where the user can select a post from the user they searched for */}
      {page === 'post-selection' && <PostSelection setPage={setPage} />}

      {/* Confirm post selection */}
      {page === 'confirm-post-selection' && <ConfirmPostSelection setPage={setPage} />}

      {/* Configure Giveaway Settings */}
      {page === 'configure-giveaway-selection' && <ConfigureGiveawaySelection setPage={setPage} />}

      {/* Display random winner, show confetti, and recorded -> saved */}
      {page === 'display-winner' && <DisplayWinner />}
    </Flex>
    <Footer />
    </Flex>
  )
}

export default App
