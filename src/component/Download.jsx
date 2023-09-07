import React from "react";

const Download = () => {
  return (
    <div className=" bg-black my-[1vh]">
      <div className=" grid grid-cols-1 sm:grid-cols-2  py-[70px] px-40  gap-2">
        <div className=" relative">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt=""
            className=" object-contain"
          />
          <div className=" w-[320px] h-24 rounded-lg absolute bottom-8 left-[136px] bg-black border border-gray-600 px-4 py-2">
            <div className=" flex justify-between h-full">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                alt=""
                className=" object-cover "
              />
              <div className="flex gap-10 items-center">
                <div>
                  <p className=" text-white">Stranger Things</p>
                  <p className=" text-blue-600">Downloading...</p>
                </div>
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                  alt=""
                  className=" w-10"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" text-white flex justify-center items-start flex-col">
          <div>
            <h1 className=" font-[900] py-4 mx-1 text-5xl">
              Download your shows to watch offline
            </h1>
            <p className=" text-2xl my-6 mx-1">
              Save your favourites easily and always have something to watch.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
