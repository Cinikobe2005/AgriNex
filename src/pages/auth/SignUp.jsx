import React, { useState } from "react";
import FcGoogle from "../../assets/googleIcon.svg";
import EyeIcon from "../../assets/eyesOpen.svg";
import EyeOffIcon from "../../assets/eyeClose.svg";
import logo from "../../assets/AgriNex.png";
import newSideImg from "../../assets/aiSideImg.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignInSchema } from "../../utils/FormValidator";
import axios from "axios";
import { Link, useNavigate } from "react-router";
import GoogleSignInButton from "../../components/GoogleSignInButton";
import Modal from "../../components/Modal";

const SignUp = () => {
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirmPwd, setShowConfirmPwd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [modalContent, setModalContent] = useState({
    title: "",
    message: "",
    color: "",
  });
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
        "https://agrinex-backend.onrender.com/api/signup",
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
        setModalContent({
          title: " Successful",
          message: response.data.message || "Sign up successful!",
          color: "text-green-500",
        });
        setIsModalOpen(true);
        navigate("/auth/signin");
      } else {
       
        setModalContent({
          title: " Un-Successful",
          message: response.data.message || "Something went wrong. Please try again.",
          color: "text-danger",
        });
        setIsModalOpen(true);
      }
    } catch (error) {
      if (
        error.response.data &&
        error.response.data &&
        error.response.data.message
      ) {
        setModalContent({
          title: " Un-Successful",
          message: error.response.data.errMsg,
          color: "text-danger",
        });
        setIsModalOpen(true);
      } else {
        setModalContent({
          title: " Un-Successful",
          message: error.response.data.errMsg,
          color: "text-danger",
        });
        setIsModalOpen(true);
      }
      console.error("Error during sign up:", error.response.data.errMsg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col xl:flex-row w-full h-screen">
      <div className="w-full xl:w-1/2 flex items-center justify-center p-6 xl:p-12">
        <div className="w-full xl:w-11/12 flex flex-col">
          <div className="flex flex-col items-start xl:text-center mb-8">
            <Link to="/">
              <img loading="lazy" src={logo} alt="AgriNex" className="mb-4" />
            </Link>
            <h1 className="text-3xl font-bold mb-2">Create Your Account</h1>
            <p className="text-gray-600 mb-6">
              Lets get you started on a journey with us today
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
            <div>
              <input
                type="email"
                placeholder="Email"
                {...register("email")}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
              <p className="p-0 m-0 text-danger">{errors.email?.message}</p>
            </div>
            <div>
              <input
                type="text"
                placeholder="Name"
                {...register("username")}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
              <p className="p-0 m-0 text-danger">{errors.username?.message}</p>
            </div>

            <div className="relative">
              <input
                type={showPwd ? "text" : "password"}
                placeholder="Password"
                {...register("password")}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
              <button
                type="button"
                onClick={() => setShowPwd((v) => !v)}
                className="absolute inset-y-0 right-3 flex items-center"
              >
                {showPwd ? (
                  <img loading="lazy" src={EyeIcon} alt="" />
                ) : (
                  <img loading="lazy" src={EyeOffIcon} alt="" />
                )}
              </button>
              <p className="p-0 m-0 text-danger">{errors.password?.message}</p>
            </div>

            <div className="relative">
              <input
                type={showConfirmPwd ? "text" : "password"}
                placeholder="Confirm Password"
                {...register("confirmPwd")}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPwd((v) => !v)}
                className="absolute inset-y-0 right-3 flex items-center"
              >
                {showConfirmPwd ? (
                  <img loading="lazy" src={EyeIcon} alt="" />
                ) : (
                  <img loading="lazy" src={EyeOffIcon} alt="" />
                )}
              </button>
              <p className="p-0 m-0 text-danger">
                {errors.confirmPwd?.message}
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isLoading ? "Loading..." : "Sign Up"}
            </button>
          </form>

          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="mx-2 text-gray-500 uppercase text-xs">or</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          {/* Use the GoogleSignInButton Component */}
          <GoogleSignInButton buttonText="Sign up with Google" />

          <p className="mt-6 text-center text-gray-700">
            Already have an account?{" "}
            <Link to="/auth/signin" className="text-green-600 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>

      <div className="hidden xl:block w-full xl:w-1/2 h-full">
        <img
          src={newSideImg}
          alt="New Side Image"
          className="w-full h-full object-cover"
        />
      </div>
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

export default SignUp;
