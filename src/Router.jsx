import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./page/Landing/Landing";

import Cart from "./page/Cart/Cart";
import Orders from "./page/Orders/Orders";
import Payment from "./page/Payment/Payment";
import Results from "./page/Results/Results";
import ProductDeail from "./page/ProductDetails/ProductDeail";
import Auth from "./page/Auth/Auth";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./Components/ProtectRoute/ProtectedRoute";
const stripePromise = loadStripe(
  "pk_test_51QQLKyEpKgVXSvkkw3GJTtVzEVwgEZSgjMA0D1D0l6JG6j1TNfpFfkAI0yW4PZCU4ARTpCKMZyX4L96NpClgIzYc000C2ArKC2"
);
function Routering() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payment"
          element={
            <ProtectedRoute
              msg={"you must log in to pay"}
              redirect={"/payment"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />

        <Route
          path="/orders"
          element={
            <ProtectedRoute
              msg={"you must log in to see your orders"}
              redirect={"/orders"}
            >
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDeail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routering;
