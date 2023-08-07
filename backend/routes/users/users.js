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

router.post("/", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", req.body.userID);

    console.log(req.body)
    if (!data || data.length === 0) {
      const { data, error } = await supabase
        .from("users")
        .insert({ id: req.body.userID, credits: 2 })
        .select();
        
      console.log("MADE ACCOUNT");
      console.log(data)
      res.send(data);
      return;
    } else {
      console.log("FOUND ACCOUNT");
      console.log(data)
      res.send(data);
      return;
    }

    console.log("FOUND ACCOUNT");
    console.log(data)
    res.send(data);
    return;

  } catch (e) {
    res.send(e.message);
    return;
  }
});

router.post("/subract", async (req, res) => {
  try {
    // Get the credits
    const { data, error } = await supabase
      .from("users")
      .select("credits")
      .eq("id", req.body.userID);
    // If credits less than 1, return error 429

    if (data[0].credits < 1) {
      res.sendStatus(429);
      return;
    }
    // Else subract
    const { data: data2, error: error2 } = await supabase
      .from("users")
      .update({ credits: data[0].credits - 1 })
      .eq("id", req.body.userID)
      .select();
    // Send the user data back to the client
    res.send(data2);
  } catch (e) {
    res.send(e.message);
    return;
  }
});
export default router;
