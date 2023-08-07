import express from "express";
import { resolve } from "path";
import cors from "cors";
import { config as dotenvConfig } from "dotenv";
import bodyParser from "body-parser";
import paymentsRouter from "./routes/payments/payment.js"; // Check this import path
import userRouter from "./routes/users/users.js"; // Check this import path

dotenvConfig({ path: "./.env" });

const app = express();

// Setup middleware
app.use(express.static(process.env.STATIC_DIR));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const path = resolve(process.env.STATIC_DIR + "/index.html");
  res.sendFile(path);
});

app.use("/payments", paymentsRouter);
app.use("/users", userRouter);


app.listen(5252, () =>
  console.log(`Node server listening at http://localhost:5252`)
);
