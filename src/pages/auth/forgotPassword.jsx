import React from "react";
import logo from "../../assets/AgriNex.png";
import newSideImg from "../../assets/aiSideImg.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgotPasswordSchema } from "../../utils/FormValidator";
import axios from "axios";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal";
import { useState } from "react";

const ForgotPassword = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [modalContent, setModalContent] = useState({
    title: "",
    message: "",
    color: "",
  }); // Modal content
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
  });

  const url = "https://agrinex-backend.onrender.com/api/forgot-password";

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(url, data);
      if (res.status === 200) {
        setModalContent({
          title: " Successful",
          message: res?.data?.message,
          color: "text-green-500",
        });
      }
      setIsModalOpen(true);
      console.log(res);
    } catch (error) {
      console.log(error);

      setModalContent({
        title: " Un-Successful",
        message: error?.response?.data?.errMsg,
        color: "text-danger",
      });
    }
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col xl:flex-row w-full h-screen">
      {/* Left Section */}
      <div className="w-full xl:w-1/2 flex items-center justify-center p-6 xl:p-12">
        <div className="w-full max-w-md">
          <div className="flex flex-col items-start mb-8">
            <Link to="/">
              <img
                loading="lazy"
                alt="AgriNex"
                src={logo}
                className="mb-4 w-32 xl:w-40"
              />
            </Link>
          </div>
          <div>
            <h1 className="text-2xl xl:text-3xl font-bold mb-2">
              Forgot Password?
            </h1>
            <p className="text-gray-600 mb-6">
              No worries.. We’ll send you a password reset link.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter email address"
                {...register("email")}
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <p className="text-red-500 text-sm mt-1">
                {errors.email?.message}
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition disabled:opacity-50"
              disabled={isSubmitting}
            >
              Reset Password
            </button>
            <div className="text-center mt-5">
              <Link
                to="/auth/signin"
                className="underline text-green-600 hover:text-green-700"
              >
                Back to Log in
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* Right Section */}
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

export default ForgotPassword;
