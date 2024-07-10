import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/bzyllxza", userInfo);
      toast.success("your message has been sent");
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    //div>Contact</div>
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        <h1 className="text-3xl font-bold mb-4">Contact me</h1>
        <span>Please fill out the form below to contact me</span>
        <div className="flex flex-col items-center justify-center mt-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            //  action="https://getform.io/f/bzyllxza"
            // method="POST"
            className="bg-slate-200 w-96 px-8 py-6 rounded-xl"
          >
            <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700" htmlFor="name">
                Name
              </label>
              <input
                {...register("name", { required: true })}
                className="shadow rounded-lg appearance-none border-rounded py-2 px-3 text-gray-700 leading-tight focus:outl"
                type="text"
                id="name"
                name="name"
                placeholder="Name"
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700" htmlFor="name">
                Email
              </label>
              <input
                {...register("email", { required: true })}
                className="shadow rounded-lg appearance-none border-rounded py-2 px-3 text-gray-700 leading-tight focus:outl"
                type="text"
                id="email"
                name="email"
                placeholder="Email"
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700" htmlFor="name">
                Message
              </label>
              <textarea
                {...register("message", { required: true })}
                className="shadow rounded-lg appearance-none border-rounded py-2 px-3 text-gray-700 leading-tight focus:outl"
                type="text"
                id="message"
                name="message"
                placeholder="message"
              />
              {errors.message && <span>This field is required</span>}
            </div>
            <button className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
