import React from "react";

const Filter = () => {
  return (
    <div className="flex justify-between my-5">
      <div className="w-70">
        <form>
          <div className="flex justify-between content-between ">
            <select
              id="type"
              className="bg-gray-50  mr-2 px-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>New</option>
              <option>used</option>
            </select>
            <select
              id="name"
              className="bg-gray-50  px-5  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>Toyota</option>
              <option>typo</option>
            </select>
          </div>
        </form>
      </div>
      <div>filters</div>
    </div>
  );
};

export default Filter;
