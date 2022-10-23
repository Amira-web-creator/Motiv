import React from "react";

const Filter = () => {
  function onFilterChange(e) {
    console.log(e.target.value);
  }

  return (
    <div className="flex justify-between my-5">
      <div className="w-70">
        <form>
          <div className=" flex justify-between content-between ">
            <div className="select">
              <select
                name="newOrused"
                onChange={onFilterChange}
                id="time"
                className="bg-white  mr-2 px-3  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>coupe</option>
                <option>used</option>
              </select>
            </div>

            <div className="select">
              <select
                name="type"
                id="type"
                className="bg-white  text-gray-900  px-5  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Toyota</option>
                <option>tepo</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Filter;
