import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/auth/SignUp";
import { BrowserRouter, Route, Routes } from "react-router";
import { Toaster } from "react-hot-toast";
import LoginPage from "./pages/auth/LoginPage";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/auth/signin" element={<LoginPage />} />
        </Routes>
        <Toaster/>
      </BrowserRouter>
    </>
  );
}

export default App;
