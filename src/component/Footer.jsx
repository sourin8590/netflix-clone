import React from "react";

const Footer = () => {
  return (
    <div className=" bg-black  py-10 text-white px-40 flex flex-col">
      <p className="py-2 mb-4 opacity-70">Questions? Call 000-800-919-1694</p>
      <div className=" grid grid-cols-3 gap-2">
        <div>
          <p className=" my-3 text-sm underline opacity-70">FAQ</p>
          <p className=" my-3 text-sm underline opacity-70">Media Centre</p>
          <p className=" my-3 text-sm underline opacity-70">Ways to Watch</p>
          <p className=" my-3 text-sm underline opacity-70">Cookie Preferences</p>
          <p className=" my-3 text-sm underline opacity-70">Speed Test</p>
        </div>
        <div>
          <p className=" my-3 text-sm underline opacity-70">Help Centre</p>
          <p className=" my-3 text-sm underline opacity-70">Investor Relations</p>
          <p className=" my-3 text-sm underline opacity-70">Terms of Use</p>
          <p className=" my-3 text-sm underline opacity-70">Corporate Information</p>
          <p className=" my-3 text-sm underline opacity-70">Legal Notices</p>
        </div>
        <div>
          <p className=" my-3 text-sm underline opacity-70">Account</p>
          <p className=" my-3 text-sm underline opacity-70">Jobs</p>
          <p className=" my-3 text-sm underline opacity-70">Privacy</p>
          <p className=" my-3 text-sm underline opacity-70">Contact Us</p>
          <p className=" my-3 text-sm underline opacity-70">Only on Netflix</p>
        </div>
      </div>
      <select className=" border border-white w-[100px] text-base font-semibold py-1 text-center rounded-md bg-black opacity-70 text-white my-6">
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
      </select>
      <p className=" opacity-70">Netflix India</p>
    </div>
  );
};

export default Footer;
