import React from "react";

const AdItem = ({ id, color, title, text, btn, img }) => {
  return (
    <>
      <div
        className={`relative  ${color}  grid items-center justify-items-start rounded-xl py-16 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}
      >
        <div className="grid items-center justify-items-start">
          <h1 className="text-slate-900  font-bold  text-lg lg:text-lg md:text-base filter drop-shadow-sm ">
            {title}
          </h1>
          <p className="text-slate-900  filter drop-shadow-sm text-sm md:text-sm font-normal ">
            {text}
          </p>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="bg-slate-900 button-theme p-0.5 shadow shadow-slate-200 text-xs text-white mt-5 px-3 py-2"
            >
              {btn}
            </button>
          </div>
        </div>
        <div className="flex items-center absolute right-1 justify-center">
          <img
            src={img}
            alt={`img/item-img/${id}`}
            className="transitions-theme p-2 hover:-rotate-12 h-auto w-44 lg:w-32 md:w-22"
          />
        </div>
      </div>
    </>
  );
};

export default AdItem;
