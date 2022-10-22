import React from "react";
import Search from "./Search";

const TopNavbar = ({mycars}) => {
  return (
    <>
      <div className="top_block border-l-2 flex flex-row justify-between bg-white py-3 px-5 ">
        <div className="search">
          <Search  mycars={mycars}/>
        </div>
        <div className="right flex">
          <div className="notifications lg:mr-2 mr-5 mt-3">
            <img src="assets/notifications.svg" className="w-10 h-5" />
          </div>
          <div className="user ">
            <img
              src="assets/user.jpg"
              className="rounded-full max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNavbar;
