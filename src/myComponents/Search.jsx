import React, { useState, useEffect } from "react";
import CarsProducts from "./utils/CarsProducts";

const Search = ({ mycars }) => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);

  useEffect(() => {
    setOutput([]);
    mycars.filter((val) => {
      if (val.title.toLowerCase().includes(input.toLowerCase())) {
        setOutput((output) => [...output, val]);
      }
    });
  }, [input]);

  return (
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
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </form>
      <div className="grid grid-cols-4 mt-5">
        {output.map((item) => (
          <CarsProducts
            key={item.id}
            title={item.title}
            text={item.text}
            fav={item.fav}
            price={item.price}
            img={item.img}
            users={item.users}
            type={item.type}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
