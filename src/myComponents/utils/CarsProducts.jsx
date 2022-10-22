import React from "react";
import { HeartIcon } from "@heroicons/react/24/solid";
const CarsProducts = ({
  id,

  title,
  price,
  img,
  text,
  fav,
  users,
  type,
}) => {
  return (
    <>
      <div
        className={`relative grid items-center 
        "justify-items-center rounded-xl bg-white py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}
      >
        <div className="grid items-start justify-items-start lg:justify-center">
          <div className="text-black w-full filter drop-shadow-sm text-sm font-medium flex justify-between ">
            <span className="mr-1">{title}</span>
            <div>
              {fav == true && (
                <h2>
                  <HeartIcon className="h-6 w-6 text-red-600" />
                </h2>
              )}
              {fav == false && (
                <h2>
                  <HeartIcon className="h-6 w-6 text-slate-200 bg-transparent" />
                </h2>
              )}
            </div>
          </div>
          <div className="text-xs text-slate-400">{text}</div>
          <div className="flex items-center justify-center">
            <img
              src={`src/assets/${img}`}
              alt={`img/item-img/${id}`}
              className="transitions-theme hover:-rotate-12 w-50  max-h-20 overflow-hidden"
            />
          </div>

          <div className="bottom-items text-slate-500 w-full xl-w-80  m-auto flex justify-between mt-2 ">
            <div className="flex justify-between w-36">
              <div className="flex text-xs ml-2">
                <img src="../assets/user.svg" className="w-4" alt="sign1" />

                <span className="ml-1">{users}</span>
              </div>
              <div className="flex text-xs ">
                <img src="../assets/sign1.svg" className="w-4" alt="sign1" />
                <span className="ml-1">{type}</span>
              </div>
            </div>

            <div className="text-xs">
              ${price}
              <span>/d</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarsProducts;
