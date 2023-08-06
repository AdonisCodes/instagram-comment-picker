import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51NbwDPJFQL0l5NjHnaqg0IZlwnsB92Fk7oJH6pEVm4YWZQy7PGVUKq2Sljjz3GafPU4UgTIPT40G5gk9J3NjGPxS00n423V3U4');

export default function App() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: '',
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};