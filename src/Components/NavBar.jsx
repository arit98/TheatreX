import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import { IoIosSearch } from "react-icons/io";

const NavBar = () => {
  const [isSearch, setIsSearch] = useState(false);
  return (
    <div className="h-12 w-full bg-[#212121] opacity-85">
      <div className="flex items-center justify-between px-48">
        <img className="h-8 mt-2" src={Logo} alt="" />
        <div className="flex items-center justify-center gap-4 text-white">
          <p className="cursor-pointer hover:text-red-700">Movies</p>
          <p className="cursor-pointer hover:text-red-700">TV Shows</p>
          <IoIosSearch className="cursor-pointer hover:text-red-700" onClick={() => {
            setIsSearch(!isSearch)
          }} />
        </div>
      </div>
      {isSearch && (
        <div className="w-full h-12 bg-white flex items-center justify-center">
          <input className="w-full outline-none pl-3 py-1" type="text" placeholder="Search a movie..." />
          <button className="py-4 bg-[#c11119] px-6">
            <IoIosSearch className="text-white" />
          </button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
