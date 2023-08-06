import { Flex, Heading } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import HomePage from './pages/Home'
import PostSelection from './pages/PostSelection'
import ConfirmPostSelection from './pages/ConfirmPostSelection/ConfirmPostSelection'
import ConfigureGiveawaySelection from './pages/ConfigureGiveawaySelection'
import DisplayWinner from './pages/DisplayWinner'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Login from './components/Login'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

function App() {
  const [page, setPage] = useState('login')
  const [user, setUser] = useState(null)

  
  return (
    <Flex flexDir={'column'} h='100vh' overflowX={'hidden'} >
      <Header setPage={setPage} page={page} user={user}/>
      <Flex flexDir='column' mt='99px'>

        {/* Instagram Login Functionality */}
        {page === 'login' && <Login setPage={setPage} setUser={setUser} />}
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
