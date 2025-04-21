import React, { useState } from "react";
import FcGoogle from "../../assets/googleIcon.svg";
import EyeIcon from "../../assets/eyesOpen.svg";
import EyeOffIcon from "../../assets/eyeClose.svg";
import logo from "../../assets/AgriNex.png";
import newSideImg from "../../assets/aiSideImg.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignInSchema } from "../../utils/FormValidator";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";

const SignUp = () => {
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirmPwd, setShowConfirmPwd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(SignInSchema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true); // Set loading state to true
    try {
      const response = await axios.post(
        "http://localhost:4090/api/signup",
        {
          email: data.email,
          username: data.username,
          password: data.password,
          confirmPassword: data.confirmPwd,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201 || response.data.success) {
        toast.success(response.data.message || "Sign up successful!");
        navigate("/auth/signin");
      } else {
        toast.error(
          response.data.message || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      if (
        error.response.data &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.errMsg);
      } else {
        toast.error(error.response.data.errMsg);
      }
      console.error("Error during sign up:", error.response.data.errMsg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center">
      <form className="bg-white p-8 rounded shadow-md w-full max-w-md">

      </form>
    </div>
  );
};

export default SignUp;
