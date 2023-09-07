import React from "react";
import navimg from "../assets/netflix.png";

const Navbar = () => {
  return (
    <div className=" h-[100px] max-w-[1280px] mx-auto  flex justify-between items-center sm:px-10 px-4">
      <div>
        <img src={navimg} alt="" className=" w-40" />
      </div>
      <div className=" flex gap-4">
        <select className=" border border-white w-[100px] text-base font-semibold py-1 text-center rounded-md bg-black opacity-70 text-white">
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
        </select>
        <button className=" w-[80px] bg-red-500 text-white rounded-md">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
