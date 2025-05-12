import React, { useState } from "react";
import FcGoogle from "../../assets/googleIcon.svg";
import EyeIcon from "../../assets/eyesOpen.svg";
import EyeOffIcon from "../../assets/eyeClose.svg";
import logo from "../../assets/AgriNex.png";
import newSideImg from "../../assets/aiSideImg.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema, SignInSchema } from "../../utils/FormValidator";
import axios from "axios";
import { Link, useNavigate } from "react-router";
import GoogleSignInButton from "../../components/GoogleSignInButton";
import Modal from "../../components/Modal";

const LoginPage = () => {
  const [showPwd, setShowPwd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [modalContent, setModalContent] = useState({
    title: "",
    message: "",
    color: "",
  }); // Modal content
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true); // Set loading state to true
    try {
      const response = await axios.post(
        "https://agrinex-backend.onrender.com/api/signin",
        {
          email: data.email,
          password: data.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200 || response.data.success) {
        setModalContent({
          title: " Successful",
          message: response.data.message || "Sign in successful!",
          color: "text-green-500",
        });
        setIsModalOpen(true);
        console.log(response.data);
        localStorage.setItem(
          "user",
          JSON.stringify({
            token: response.data.token,
          })
        );
        navigate("/");
      } else {
       
        setModalContent({
          title: " Un-Successful",
          message:
            response.data.message || "Something went wrong. Please try again.",
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
          message:
          error.response.data.message,
          color: "text-danger",
        });
        setIsModalOpen(true);
      } else {
        setModalContent({
          title: " Un-Successful",
          message:
          error.response.data.message,
          color: "text-danger",
        });
        setIsModalOpen(true);
      }
      console.error("Error during sign in:", error.response.data.message);
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
              <img loading="lazy" src={logo} alt="AgriNex" className="pb-13" />
            </Link>
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-gray-600 mb-6">Sign In To Your Account</p>
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
            <div className="flex justify-end">
              <Link to="/auth/forgot-password" className="underline">
                <p>Forgot Password?</p>
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isLoading ? "Loading..." : "Sign In"}
            </button>
          </form>

          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="mx-2 text-gray-500 uppercase text-xs">or</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          <GoogleSignInButton buttonText="Sign In with Google" />

          <p className="mt-6 text-center text-gray-700">
            Don’t have an account?{" "}
            <Link to="/auth/signup" className="text-green-600 hover:underline">
              Sign Up
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

export default LoginPage;
