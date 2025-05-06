import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import FcGoogle from "../assets/googleIcon.svg";

const GoogleSignInButton = ({ buttonText = "Sign in with Google" }) => {
  const navigate = useNavigate();

  const googleSignin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        console.log("Google Token Response:", tokenResponse);

        if (!tokenResponse || !tokenResponse.access_token) {
          toast.error("Google Sign-In failed. No token received.");
          return;
        }

        const res = await axios.post(
          "https://agrinex-backend.onrender.com/api/google",
          {
            token: tokenResponse.access_token,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (res.status === 200 && res.data.token) {
          console.log("SignIn Success", res.data.token);

          localStorage.setItem(
            "user",
            JSON.stringify({
              token: res.data.token,
              profilePicture: res.data.user.profilePicture,
              username: res.data.user.username,
            })
          );
          console.log("Stored User:", JSON.parse(localStorage.getItem("user")));
          toast.success("Sign in successful!");
          navigate("/");
        } else {
          toast.error(
            res.data.message || "Error signing in. Please try again."
          );
          console.error("SignIn failed", res.data || "No token received");
        }
      } catch (err) {
        toast.error(
          err.response?.data?.message || "Error signing in. Please try again."
        );
        console.error("SignIn failed", err.response?.data || err.message);
      }
    },
    onError: () => {
      toast.error("Google Sign-In Failed");
      console.log("Google Sign-In Failed");
    },
  });

  return (
    <button
      onClick={() => googleSignin()}
      className="w-full py-3 border border-gray-300 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-100 transition"
    >
      <img loading="lazy" src={FcGoogle} alt="Google Icon" />
      <span>{buttonText}</span>
    </button>
  );
};

export default GoogleSignInButton;