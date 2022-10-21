import React from "react";
import AdItem from "./utils/AdItem";

const MixedBlock = ({ endpoint: { items } }) => {
  let points = 1300;
  let badges = 20;

  return (
    <div className="car-container mt-2">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-2 overflow-hidden xl:col-span-4">
          {items?.map((item, i) => (
            <AdItem {...item} key={i} />
          ))}
        </div>
        <div className="col-span-1 xl:col-span-2 lg:col-span-4 bg-slate-900 rounded-md p-4 relative">
          <div className="flex text-white justify-between items-center lg:mb-5">
            <div className="left w-12  text-xl md:text-lg  ">
              You have earned
              <p className="text-3xl text-orange-500">{badges}</p>
              Badge
            </div>
            <div className="right w-30 lg:w-40 ">
              <img src="../assets/man.png" />
            </div>
          </div>
          <div className="text-xs md:absolute top:20 text-orange-500">
            Hooray! Way to go Mohammed!
          </div>
        </div>
        <div className="col-span-1 xl:col-span-2 lg:col-span-4 bg-pink-800 rounded-md p-4 relative">
          <div className="flex text-white justify-between items-center lg:mb-5">
            <div className="left w-12  text-xl md:text-lg  ">
              <p>You have earned</p>
              <p className="text-3xl text-red-200">{points}</p>
              Points
            </div>
            <div className="right w-30 lg:w-40">
              <img src="../assets/clock.png" />
            </div>
          </div>
          <div className="text-xs md:absolute top:20 text-red-300">
            Hooray! Way to go Mohammed!
          </div>
        </div>
      </div>
    </div>
  );
};

export default MixedBlock;
