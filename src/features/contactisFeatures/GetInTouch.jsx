import React from "react";
import Button from "../../components/Button";
import map from "../../assets/Map.png";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://agrinex-backend.onrender.com/api/contact-us",
        formData
      );
      if (response.status === 201) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", phoneNumber: "", email: "", message: "" });
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <main className="py-4 px-6 md:px-[90px] xl:px-[100px]">
      <div className="w-11/12 mx-auto container">
        <div className="flex flex-col xl:flex-row justify-between text-left gap-5 mt-10">
          <div className="p-4 bg-graylight rounded-2xl w-full xl:w-[60%]">
            <h1 className="text-[30px] md:text-[40px] font-bold">
              Get In Touch
            </h1>
            <hr />
            <form onSubmit={handleSubmit} className="space-y-8 mt-4">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="name"
                    className="text-black text-[20px] md:text-[24px] font-bold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="bg-white outline-1 outline-gray p-2 rounded-lg w-full"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="phoneNumber"
                    className="text-black text-[20px] md:text-[24px] font-bold mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="bg-white outline-1 outline-gray p-2 rounded-lg w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-8">
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="email"
                    className="text-black text-[20px] md:text-[24px] font-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="bg-white outline-1 outline-gray p-2 rounded-lg w-full"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="message"
                    className="text-black text-[20px] md:text-[24px] font-bold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-white outline-1 outline-gray p-2 rounded-lg w-full"
                    cols="4"
                    rows="7"
                  ></textarea>
                </div>
              </div>
              <Button
                type="submit"
                className="bg-green text-white w-full py-3 rounded-xl hover:bg-bluehover transition-all duration-300 ease-in-out"
              >
                Send Message
              </Button>
            </form>
          </div>
          <div className="flex flex-col justify-between gap-10  w-full xl:w-[35%]">
            <div className="p-6 border-1 border-gray rounded-2xl h-full">
              <div>
                <h1 className="text-[25px] md:text-[32px] font-bold">
                  Contact Information
                </h1>
                <hr />
              </div>
              <div className="flex flex-col gap-4 mt-3 text-[20px] h-full ">
                <div>
                  <h1 className="font-bold">Phone</h1>
                  <p className="text-gray">+234-7065051731</p>
                </div>
                <div>
                  <h1 className="font-bold">Address</h1>
                  <p className="text-gray">
                    1, Ogunlesi Street, Off Awoyokun Bus-stop Onipanu,
                    Palmgrove, Lagos
                  </p>
                </div>
                <div>
                  <h1 className="font-bold">Email</h1>
                  <p className="text-gray">info@agrinex.com</p>
                </div>
              </div>
            </div>
            <div className="p-6 border-1 border-gray rounded-2xl">
              <div>
                <h1 className="text-[25px] md:text-[35px] font-bold">
                  Business Hours
                </h1>
                <hr />
                <div className="flex flex-col md:flex-row gap-4 w-full mt-3 text-[20px] ">
                  <div>
                    <h1 className=" font-bold">Mon-Fri.</h1>
                    <p className=" text-gray">9am-8pm</p>
                  </div>
                  <div>
                    <h1 className=" font-bold">Sat. & Sun.</h1>
                    <p className=" text-gray">12pm-8pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-20 w-full">
          <iframe
            title="AgriNex Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.8899119932175!2d3.36344457499303!3d6.535585093457206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8dba7bad97cb%3A0xae0bc176821041e5!2sTech%20Studio%20Academy%20%7C%20Tech%20Training%20Institute%20in%20Lagos!5e0!3m2!1sen!2sng!4v1747011775237!5m2!1sen!2sng"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </main>
  );
};

export default GetInTouch;
