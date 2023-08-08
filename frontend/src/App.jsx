import { Flex, Heading } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import HomePage from './pages/Home'
import PostSelection from './pages/PostSelection'
import ConfirmPostSelection from './pages/ConfirmPostSelection/ConfirmPostSelection'
import ConfigureGiveawaySelection from './pages/ConfigureGiveawaySelection'
import DisplayWinner from './pages/DisplayWinner'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Login from './components/Login'
import PaymentPage from './pages/PaymentPage/PaymentPage'
import PastGiveaways from './pages/PastGIveaways'

function App() {
  const [page, setPage] = useState('login')
  const [user, setUser] = useState(null)
  // TODO: Make the state managed better, so that we don't need a refresh to update the credits
  const [credits, setCredits] = useState(Number(localStorage.getItem('credits')) || 0)
  const [giveawayRedirect, setGiveawayRedirect] = useState(false)
  return (
    <Flex flexDir={'column'} h='100vh' overflowX={'hidden'} >
        <Header setPage={setPage} page={page} user={user} />
        <Flex flexDir='column' mt='99px'>

          {/* Other Pages Named here */}
          {/* payments page is for Stripe Payments / Credits */}
          {page === 'payment' && <PaymentPage /> }
          {/* Past giveaways page */}
          {page === 'past-giveaways' && <PastGiveaways setPage={setPage} setGiveawayRedirect={setGiveawayRedirect}/>}


          {/* Instagram Login Functionality */}
          {page === 'login' && <Login setPage={setPage} setUser={setUser} setCredits={setCredits}/>}
          {/* home -> is the homepage of the application, this contains the funcitonality to search for a user and confirm */}
          {page === 'home' && <HomePage setPage={setPage} />}

          {/* post-selection -> is the page where the user can select a post from the user they searched for */}
          {page === 'post-selection' && <PostSelection setPage={setPage} />}

          {/* Confirm post selection */}
          {page === 'confirm-post-selection' && <ConfirmPostSelection setPage={setPage} setCredits={setCredits}/>}

          {/* Configure Giveaway Settings */}
          {page === 'configure-giveaway-selection' && <ConfigureGiveawaySelection setPage={setPage} setGiveawayRedirect={setGiveawayRedirect} />}

          {/* Display random winner, show confetti, and recorded -> saved */}
          {page === 'display-winner' && <DisplayWinner giveawayRedirect={giveawayRedirect}/>}
        </Flex>
        <Footer />
      </Flex>
  )
}

export default App
