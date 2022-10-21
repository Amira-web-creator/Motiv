import React from "react";
import Search from "./Search";

const TopNavbar = () => {
  return (
    <>
      <div className="top_block border-l-2 p-3 flex flex-row justify-between ">
        <div className="search">
          <Search />
        </div>
        <div className="right flex">
          <div className="notifications lg:mr-2 mr-5 mt-3">
            <img src="assets/notifications.svg" className="w-10 h-5" />
          </div>
          <div className="user ">
            <img
              src="assets/user.jpg"
              className="rounded-full max-w-full  h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNavbar;
