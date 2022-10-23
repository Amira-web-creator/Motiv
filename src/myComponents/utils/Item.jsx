import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Custom.css";

const Item = ({ id, color, title, img, hoverColor, percentage }) => {
  return (
    <>
      <div
        className={` relative text-black hover:text-white  ${color} ${hoverColor} range-block grid items-center justify-items-center rounded-xl  px-2 transition-all duration-700 ease-in-out w-full hover:scale-105`}
      >
        <div className="flex flex-col items-center justify-items-center ">
          <div className="bg-slate-200 rounded-full my-3 w-10 h-10 flex items-center justify-center ">
            <img
              src={img}
              alt={`img/item-img/${id}`}
              className="transitions-theme hover:-rotate-12 h-4 w-3"
            />
          </div>

          <h1 className=" text-xl lg:text-lg md:text-base font-medium filter drop-shadow-sm my-1 ">
            {title}
          </h1>

          <div className="flex item-center gap-1 my-5 ">
            <h1 className="md:text-sm w-20 font-normal">
              <CircularProgressbar
                className="m-auto "
                value={percentage}
                maxValue={1}
                text={`${percentage * 100}%`}
              />
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
