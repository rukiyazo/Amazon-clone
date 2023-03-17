const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
//app configw2
const app = express();
//-middlewares
app.use(cors({ origin: true }));
app.use(express.json());
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("payment Request Recieved for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//listen command
exports.api = functions.https.onRequest(app);

//http://127.0.0.1:5001/app-19d03/us-central1/api
//http://127.0.0.1:5001/app-19d03/us-central1/api
