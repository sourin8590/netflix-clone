import React from "react";
import Navbar from "./Navbar";
import { IoIosArrowForward } from "react-icons/io";

const Home = () => {
  return (
    <div className=" banner h-[99vh] backdrop-brightness-150">
      <Navbar />
      <div className="max-w-[1280px] mx-auto px-10 ">
        <div className=" text-white h-[89vh] flex  flex-col justify-center items-center">
          <h1 className=" lg:text-5xl text-4xl font-bold text-center ">
            The biggest Indian hits. Ready to watch here from ₹149.
          </h1>
          <br />
          <h3 className=" text-2xl font-semibold pb-6">
            Join today. Cancel anytime.
          </h3>
          <h3 className=" text-2xl font-semibold pb-4">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <div className=" flex justify-center items-center gap-4">
            <input
              type="text"
              className=" w-[400px]   backdrop-blur-sm bg-black/20 text-lg text-white px-2 py-4 border rounded-md "
              placeholder=" Email address"
            />
            <button className=" text-xl font-semibold bg-red-600 text-white py-4 w-[180px] rounded-md flex justify-center items-center gap-1">
              Get Started
              <IoIosArrowForward size={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
