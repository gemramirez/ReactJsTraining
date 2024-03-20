import { useState } from "react";
import { FaUsers } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { FaDiagramProject } from "react-icons/fa6";
import { MdOutlinePersonPinCircle } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

const SideNav: React.FC = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Dashboard", src: <RxDashboard className="w-[30px] h-[30px]" /> },
    { title: "User", src: <FaUsers className="w-[30px] h-[30px]"/> },
    { title: "Project", src: <FaDiagramProject className="w-[30px] h-[30px]" /> },
    { title: "Role", src: <MdOutlinePersonPinCircle  className="w-[30px] h-[30px]"/> },
    { title: "Development Phase", src:"", gap:true},
    { title: "Project Status", src: "" },
    { title: "Employee Status", src: "" },
    { title: "Employee Position", src: "" },
    { title: "Business Unit", src: "" },
    { title: "Departments", src: "" },
    { title: "Technologies", src: "" },
    { title: "Clients", src: "" },
  ];
  return (
    <>
      <div className="flex ">
        <div
          className={`${
            open ? "w-72" : "w-20" 
          } duration-300 w-72 h-[100vh] bg-white relative`}
        >
          <IoIosArrowDroprightCircle
            className={`ml-[50px] absolute cursor-pointer  -right-3 top-9 w-10 h-10 rounded-full border-2 border-red ${
              !open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center w-9">
            <img
              src="logo.png "
              alt=""
              className={` cursor-pointer duration-300`}
            />
            <h1
              className={`text-blue-950 origin-left font-medium text-xl duration-500 ${
                !open && "scale-0"
              }`}
            >
              Control Center
            </h1>
          </div>
          <ul className="mt-10">
            {Menus.map((menu, index) => (
              <li
                key={index}
                className={`text-blue-950 text-sm flex items-center gap-x-4 cursor-pointer p-2  hover:bg-blue-100 rounded-lg ${menu.gap? "mt-9" : "mt-2"}`}
              >
                {menu.src}
                <span className={`${!open && 'hidden'} origin-left duration-200 text-md`}>{menu.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideNav;
