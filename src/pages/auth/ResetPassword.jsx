import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetPasswordSchema } from "../../utils/FormValidator";
import logo from "../../assets/AgriNex.png";
import newSideImg from "../../assets/aiSideImg.png";
import Modal from "../../components/Modal";
const ResetPassword = () => {
  const { resetToken } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [modalContent, setModalContent] = useState({
    title: "",
    message: "",
    color: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(resetPasswordSchema),
  });

  const onSubmit = async (data) => {
    try {
      const req = await fetch(
        `https://agrinex-backend.onrender.com/api/reset-password/${resetToken}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const res = await req.json();
      console.log(res);
      if (res.success || res.status === 201) {
        setModalContent({
          title: " Successful",
          message: res.message,
          color: "text-green-500",
        });
        setIsModalOpen(true);
        navigate("/auth/signup");
      }
      if (!res.success || res.status === 400) {
        setModalContent({
          title: " Un-Successful",
          message: res.message,
          color: "text-dNanger",
        });
        setIsModalOpen(true);
      }
    } catch (error) {
      console.error("Error during password reset:", error);
      setModalContent({
        title: " Un-Successful",
        message: "An error occurred. Please try again later.",
        color: "text-dNanger",
      });
      setIsModalOpen(true);
    }
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
                src={logo}
                alt="AgriNex"
                className="mb-4 w-32 xl:w-40"
              />
            </Link>
          </div>
          <div>
            <h1 className="text-2xl xl:text-3xl font-bold my-4">
              Reset Password
            </h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className=" w-full">
            <div>
              <input
                type="text"
                placeholder="New Password"
                {...register("password")}
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <p className="text-red-500 text-sm mt-1">
                {errors.password?.message}
              </p>
            </div>
            <div>
              <input
                type="text"
                placeholder="Re-enter Password"
                {...register("confirmPwd")}
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPwd?.message}
              </p>
            </div>

            <button
              type="submit"
              className="w-full mt-10 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Confirm Password"}
            </button>
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

export default ResetPassword;
