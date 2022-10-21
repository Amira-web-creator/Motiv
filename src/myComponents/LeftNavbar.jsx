import { useState } from "react";
import { Link } from "react-router-dom";
const LeftNavbar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "dashboard icon",link:"/" },
    { title: "car", src: "car" , link:"/cars" },
    { title: "settings", src: "settings" },
    { title: "logout ", src: "logout" },
  ];
  return (
    <>
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        }  h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-14 w-7 border-dark-purple
  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.jpg"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <span className={`${!open && "hidden"} origin-left duration-200`}>
            Motive
          </span>

          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          ></h1>
        </div>
        <ul className="menu pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex hover:bg-slate-100 rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-800 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={`./src/assets/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                <Link to={Menu.link}> {Menu.title}</Link>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default LeftNavbar;
