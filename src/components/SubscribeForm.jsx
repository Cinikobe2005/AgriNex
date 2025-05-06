import React, { useState } from "react";
import toast from "react-hot-toast";

const SubscribeForm = () => {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) {
            toast.error("Please enter a valid email address.");
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
            toast.success(data.message);
            setEmail(""); // Clear the input field
        } catch (error) {
            console.error("Subscription failed:", error);
            toast.error("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-0 w-full max-w-[90%] md:max-w-[631px]"
        >
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="bg-white text-black outline-0 md:rounded-bl-[32px] md:rounded-tl-[32px] px-4 py-3 md:px-6 md:py-4 text-[16px] md:text-[20px] w-full md:w-auto"
            />
            <button
                type="submit"
                disabled={isSubmitting}
                className="bg-green text-white text-[16px] md:text-[20px] px-4 py-3 md:px-6 md:py-4 md:rounded-br-[32px] md:rounded-tr-[32px] w-full md:w-auto cursor-pointer hover:bg-green-800 transition duration-300 ease-in-out disabled:opacity-50"
            >
                {isSubmitting ? "Submitting..." : "Subscribe"}
            </button>
        </form>
    );
};

export default SubscribeForm;