import React from "react";

const Tv = () => {
  return (
      <div className=" bg-black my-[1vh]">
      <div className=" grid grid-cols-1 sm:grid-cols-2  py-[70px] px-40  gap-2">
        <div className=" text-white flex justify-center items-start flex-col">
          <div>
            <h1 className=" font-[900] py-4 mx-1 text-5xl">Enjoy on your TV</h1>
            <p className=" text-2xl my-6 mx-1">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
            </p>
          </div>
        </div>
        <div>
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt=""
            className=" object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Tv;
