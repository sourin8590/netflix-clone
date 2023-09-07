import React from "react";

const Children = () => {
  return (
    <div className=" bg-black my-[1vh]">
      <div className=" grid grid-cols-1 sm:grid-cols-2  py-[70px] px-40  gap-2">
        <div>
          <img
            src="https://occ-0-6245-3663.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
            alt=""
            className=" object-contain"
          />
        </div>
        <div className=" text-white flex justify-center items-start flex-col">
          <div>
            <h1 className=" font-[900] py-4 mx-1 text-5xl">
              Create profiles for kids
            </h1>
            <p className=" text-2xl my-6 mx-1">
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Children;
