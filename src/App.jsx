import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { Toaster } from "react-hot-toast";
import ForgotPassword from "./pages/auth/forgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import Error from "./pages/auth/Error"

const HomePage = lazy(() => import("./pages/HomePage"));
const SignUp = lazy(() => import("./pages/auth/SignUp"));
const LoginPage = lazy(() => import("./pages/auth/LoginPage"));
const About = lazy(() => import("./pages/About"));
const Work = lazy(() => import("./pages/Work"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="flex justify-center items-center w-full h-screen">
              {" "}
              <span className="w-25 loading loading-ring loading-xl"></span>{" "}
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />}>
              <Route path="/about" element={<About />} />
              <Route path="/our-work" element={<Work />} />
              <Route path="/contact-us" element={<Contact />} />
            </Route>
            <Route path="/auth/signup" element={<SignUp />} />
            <Route path="/auth/signin" element={<LoginPage />} />
            <Route
              path="/reset-password/:resetToken"
              element={<ResetPassword />}
            />
            <Route path="/auth/forgot-password" element={<ForgotPassword />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
