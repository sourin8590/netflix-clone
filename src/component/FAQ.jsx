import React, { useState } from "react";
import { MdOutlineClose, MdOutlineAdd } from "react-icons/md";

const FAQ = ({ qus, ans1, ans2 }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="my-2">
      <div
        className=" flex justify-between items-center p-6 text-2xl bg-[rgb(45,45,45)] hover:bg-[rgb(65,65,65)] cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <h2>{qus}</h2>
        <div onClick={() => setShow(!show)}>
          {!show ? <MdOutlineAdd size={35} /> : <MdOutlineClose size={35} />}
        </div>
      </div>
      {show ? (
        <div className=" p-6 mt-[1px] bg-[rgb(45,45,45)]">
          <p className=" text-xl">{ans1}</p>
          <br />
          <p className=" text-xl">{ans2}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default FAQ;
