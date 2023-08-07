import express from "express";
import { resolve } from "path";
import { config as dotenvConfig } from "dotenv";
import stripeModule from "stripe";
import bodyParser from "body-parser";
import { createClient } from "@supabase/supabase-js";

dotenvConfig({ path: "./.env" });

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON;
const supabase = createClient(supabaseUrl, supabaseKey);


const router = express.Router();
const stripe = stripeModule(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-08-01",
});

router.post("/create-payment-intent", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "USD",
      amount: 5 * 100,
    });

    // Send publishable key and PaymentIntent details to client
    res.send({
      clientSecret: paymentIntent.client_secret,
    });

    const { data, error } = await supabase
      .from("users")
      .update({ credits: "50" })
      .eq("id", req.body.userID)
      .select()

    console.log(
      "payment successful with amount of 5 usd with a response of",
      paymentIntent
    );
  } catch (e) {
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
});

router.get("/config", (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

export default router;
