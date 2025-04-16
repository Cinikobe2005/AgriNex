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
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto lg:flex flex-col md:flex-row items-center md:space-x-20 px-4 py-">
        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="flex flex-col items-start lg:text-center mb-8">
            <img src={logo} alt="AgriNex" className="mb-4" />
            <h1 className="text-3xl font-bold mb-2">Create an account</h1>
            <p className="text-gray-600 mb-6">
              Let&apos;s get you started on a journey with us today
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
              <p className="p-1 m-0 text-danger">{errors.email?.message}</p>
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
                  <img src={EyeIcon} alt="" />
                ) : (
                  <img src={EyeOffIcon} alt="" />
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
                  <img src={EyeIcon} alt="" />
                ) : (
                  <img src={EyeOffIcon} alt="" />
                )}
              </button>
              <p className="p-0 m-0 text-danger">
                {errors.confirmPwd?.message}
              </p>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                {...register("agree")}
                className="h-4 w-4 text-green-600"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                I agree to the{" "}
                <a className="text-green-600 hover:underline">
                  terms & conditions
                </a>
              </label>
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
            <span className="mx-2 text-gray-500 uppercase text-xs ">or</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          <button className="w-full py-3 border border-gray-300 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-100 transition">
            <img src={FcGoogle} alt="" />
            <span>Sign in with Google</span>
          </button>

          <p className="mt-6 text-center text-gray-700">
            Already have an account?{" "}
            <Link to="/auth/signin" className="text-green-600 hover:underline">
              Sign in
            </Link>
          </p>
        </div>

        <div className="hidden lg:block w-full md:w-1/2">
          <img src={newSideImg} alt="New Side Image" className="w-full my-5" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
