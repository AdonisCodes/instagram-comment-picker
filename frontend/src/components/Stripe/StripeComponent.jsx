import { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { BACKEND_URL } from "../../config/config";
import { Box, Flex, Heading, Spinner } from "@chakra-ui/react";

function StripeComponent() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch(BACKEND_URL + "payments/config").then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    fetch(BACKEND_URL + "payments/create-payment-intent", {
      method: "POST",
      body: JSON.stringify({
        userID: localStorage.getItem('userID'),
      }),
    }).then(async (result) => {
      var { clientSecret } = await result.json();
      setClientSecret(clientSecret);
    });

  }, []);

  return (
    <Flex flexDir={'column'} align='center' justify='center' textAlign={'center'} gap='5' h='500px'>
      <Heading size={'md'}>Buy 5usd Credits = <strong>10 Giveaways</strong></Heading>
      <Flex h='400px' align='center' justify='center'>
        {clientSecret && stripePromise ? (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm />
          </Elements>
        ) : <Spinner />}
      </Flex>
    </Flex>
  );
}

export default StripeComponent;