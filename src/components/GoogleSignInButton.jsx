import React, { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FcGoogle from "../assets/googleIcon.svg";
import Modal from "./Modal";

const GoogleSignInButton = ({ buttonText = "Sign in with Google" }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [modalContent, setModalContent] = useState({
    title: "",
    message: "",
    color: "",
  });

  const googleSignin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {

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

          localStorage.setItem(
            "user",
            JSON.stringify({
              token: res.data.token,
              profilePicture: res.data.user.profilePicture,
              username: res.data.user.username,
            })
          );
          setModalContent({
            title: " Successful",
            message: "Sign in successful!",
            color: "text-green-500",
          });
          setIsModalOpen(true);
          navigate("/");
        } else {
         
            setModalContent({
            title: " Un-Successful",
            message: res.data.message || "Error signing in. Please try again.",
            color: "text-danger",
          });
          setIsModalOpen(true);
        }
      } catch (err) {
       
         setModalContent({
            title: " Un-Successful",
            message: err.response?.data?.message || "Error signing in. Please try again.",
            color: "text-danger",
          });
          setIsModalOpen(true);
      }
    },
    onError: () => {
         setModalContent({
            title: " Un-Successful",
            message: "Google Sign-In Failed",
            color: "text-danger",
          });
          setIsModalOpen(true);
    },
  });

  return (
    <div>
      <button
        onClick={() => googleSignin()}
        className="w-full py-3 border border-gray-300 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-100 transition"
      >
        <img loading="lazy" src={FcGoogle} alt="Google Icon" />
        <span>{buttonText}</span>
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} // Close the modal
        title={modalContent.title}
        message={modalContent.message}
        color={modalContent.color}
      />
    </div>
  );
};

export default GoogleSignInButton;
