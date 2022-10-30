import React from "react";

const TopNavbar = ({ setQuery }) => {
  const getValue = (e) => {
    setQuery(e);
  };

  return (
    <>
      <div className="top_block border-l-2 flex flex-row justify-between bg-white py-3 px-5 ">
        <div className="search">
          <div>
            <form>
              <div className="relative ">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  className="block h-10 p-4 pl-10 w-full bg-gray-50 rounded-md"
                  placeholder="Search or type"
                  required=""
                  onChange={(e) => getValue(e.target.value)}
                />
              </div>
            </form>
          </div>
        </div>
        <div className="right flex">
          <div className="notifications lg:mr-2 mr-5 mt-3">
            <img src="assets/notifications.svg" className="w-10 h-5" />
          </div>
          <div className="user">
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
