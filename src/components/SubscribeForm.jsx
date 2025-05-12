import React, { useState } from "react";
import Modal from "./Modal"; // Import the reusable Modal component

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [modalContent, setModalContent] = useState({ title: "", message: "", color: "" }); // Modal content

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setModalContent({
        title: "Invalid Email",
        message: "Please enter a valid email address.",
        color: "text-red-500",
      });
      setIsModalOpen(true); // Open the modal
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://agrinex-backend.onrender.com/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to subscribe");
      }

      const data = await response.json();
      setModalContent({
        title: "Subscription Successful",
        message: data.message,
        color: "text-green-500",
      });
      setIsModalOpen(true); // Open the modal
      setEmail(""); // Clear the input field
    } catch (error) {
      console.error("Subscription failed:", error);
      setModalContent({
        title: "Subscription Failed",
        message: "Something went wrong. Please try again.",
        color: "text-red-500",
      });
      setIsModalOpen(true); // Open the modal
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Subscription Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-0 w-full max-w-[90%] md:max-w-[631px]"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          className="bg-white text-black outline-0 md:rounded-bl-[32px] rounded-full md:rounded-none md:rounded-tl-[32px] px-4 py-3 md:px-6 md:py-4 text-[16px] md:text-[20px] w-full md:w-auto"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-green text-white text-[16px] md:text-[20px] rounded-full md:rounded-none px-4 py-3 md:px-6 md:py-4 md:rounded-br-[32px] md:rounded-tr-[32px] w-full md:w-auto cursor-pointer hover:bg-green-800 transition duration-300 ease-in-out disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Subscribe"}
        </button>
      </form>

      {/* Reusable Modal Component */}
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

export default SubscribeForm;
