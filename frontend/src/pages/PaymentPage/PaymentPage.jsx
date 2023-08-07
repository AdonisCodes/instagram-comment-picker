import { Flex } from "@chakra-ui/react";
import StripeComponent from "../../components/Stripe";

export default function PaymentPage() {
  return (
    <Flex align='center' justify='center'>
        <StripeComponent />
    </Flex>
  )
}