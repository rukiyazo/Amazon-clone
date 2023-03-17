import "./App.css";
import React from "react";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import { useStateValue } from "./Stateprovider";
import { useEffect } from "react";
import { auth } from "./Firebase";
// import { auth } from "./Firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
const promise = loadStripe(
  "pk_test_51MdfF2AINw6NO5iXl5JBZn3zluLpg1KX6Ydy4vhRhy1hNtxW0IPIfi46MCP1rmkw1MMLa49FoegrUoBrlKEs4ame00NwbFnWB0"
);
// const promise = loadStripe(process.env.STRIPE_PUBLIC_KEY);
function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // console.log(authUser)
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/orders"
            element={
              <>
                <Header /> <Orders />
              </>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <div>
                <Header /> <Checkout />
              </div>
            }
          />

          <Route
            path="/"
            element={
              <div>
                <Header /> <Home />
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
