import React, { useState } from "react";
import FcGoogle from "../../assets/googleIcon.svg";
import EyeIcon from "../../assets/eyesOpen.svg";
import EyeOffIcon from "../../assets/eyeClose.svg";
import logo from "../../assets/AgriNex.png";
import newSideImg from "../../assets/aiSideImg.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema, SignInSchema } from "../../utils/FormValidator";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";

const LoginPage = () => {
  const [showPwd, setShowPwd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
        "http://localhost:4090/api/signin",
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
        toast.success(response.data.message || "Sign in successful!");
        console.log(response.data.message);
        navigate("/");
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
        toast.error(error.response.data.message);
      } else {
        toast.error(error.response.data.message);
      }
      console.error("Error during sign in:", error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto lg:flex flex-col md:flex-row items-center md:space-x-20 px-4 ">
        <div className="w-full lg:w-1/2 flex flex-col  ">
          <div className="flex flex-col items-start lg:text-center mb-8">
            <img src={logo} alt="AgriNex" className="mb-4" />
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-gray-600 mb-6">Sign In To Your Account</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
            <input
              type="email"
              placeholder="Email"
              required
              {...register("email")}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <p className="p-0 m-0 text-danger">{errors.email?.message}</p>

            <div className="relative">
              <input
                type={showPwd ? "text" : "password"}
                placeholder="Password"
                required
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
            <div className="flex  justify-end ">
              <Link>
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
            <span className="mx-2 text-gray-500 uppercase text-xs ">or</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          <button className="w-full py-3 border border-gray-300 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-100 transition">
            <img src={FcGoogle} alt="" />
            <span>Sign in with Google</span>
          </button>

          <p className="mt-6 text-center text-gray-700">
            Don’t have an account ?{" "}
            <Link to="/auth/signup" className="text-green-600 hover:underline">
              Sign Up
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

export default LoginPage;
