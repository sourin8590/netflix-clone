import React, { useState } from "react";
import { FAQData } from "../assets/FAQData";
import FAQ from "./FAQ";
import { IoIosArrowForward } from "react-icons/io";

const Question = () => {


  return (
    <div className=" bg-black my-[1vh]  py-[70px] text-white">
      <div className=" mx-40">
        <h1 className=" font-[900] py-4 mx-1 text-5xl text-center mb-6">
          Frequently Asked Questions
        </h1>
        {FAQData.map((currElem) => {
          const { id } = currElem;
          return <FAQ key={id} {...currElem} />
        })}
        <p className=" my-6 text-xl text-center pt-4">
          Ready to watch? Enter your email to create or restart your membership. 
        </p>
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
  );
};

export default Question;
