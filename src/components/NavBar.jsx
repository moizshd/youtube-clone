import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaMicrophone, FaYoutube } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { RiVideoAddLine } from "react-icons/ri";
import { BsBell } from "react-icons/bs";

const NavBar = () => {
  return (
    <nav className="flex bg-[#212121] h-14 px-7 justify-between items-center">
      <div className="flex items-center gap-6 ">
        <GiHamburgerMenu className="text-3xl" />
        <div className="flex gap-2">
          <FaYoutube className="text-4xl text-red-500" />
          <span className="text-3xl">Youtube</span>
        </div>
      </div>
      <div className="flex ">
        <div className="flex items-center   h-10 gap-8">
          <div className="flex items-center bg-zinc-900 rounded-3xl">

          <input
            type="text"
            placeholder="Search"
            className=" w-96 bg-zinc-900 border-none focus:outline-none  px-4"
            />
          <div className="flex pl-5 bg-zinc-700 rounded-r-3xl">
            <button className="text-3xl pr-4 h-10 ">
              <IoSearch />
            </button>
            </div>
          </div>
          <div className="flex items-center text-white p-3 h-10 rounded-full bg-zinc-700">
        <FaMicrophone />

          </div>
        </div>
      </div>
      <div className="flex text-white items-center text-2xl gap-8">
        <RiVideoAddLine />
        <BsBell/>
        <img
          src="https://avatars.githubusercontent.com/u/77468756?v=4"
          alt="profile"
          className="h-10 w-10 rounded-full"
          />
      </div>
    </nav>
  );
};

export default NavBar;
