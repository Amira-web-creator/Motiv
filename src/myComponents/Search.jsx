import React from "react";

const Search = () => {
  return (
    <div>
      <form>
     
        <div className="relative w-30">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokelinecap="round" strokelinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
          <input
            type="search"
            id="default-search"
            className="block h-10 p-4 pl-10 w-full bg-gray-100 rounded-md"
            placeholder="Search or type"
            required=""
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
