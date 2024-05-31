import React from "react";
import HomeIcon from "../assets/nav/homeicon.svg";
import SkillsIcon from "../assets/nav/skillsicon.svg";
import CirclesIcon from "../assets/nav/circlesicon.svg";
import ProfileIcon from "../assets/nav/profileicon.svg";
import Image from "next/image";

const NavBar = () => {
  const navs = [
    {
      icon: HomeIcon,
      title: "Home",
    },
    {
      icon: SkillsIcon,
      title: "Skills",
    },
    {
      icon: CirclesIcon,
      title: "Circles",
    },
    {
      icon: ProfileIcon,
      title: "Profile",
    },
  ];
  return (
    <div className="flex justify-center items-center px-3 w-full shadow-2xl h-[80px] bg-white">
      <div className="flex justify-between w-full">
        {navs.map((nav, index) => (
          <div key={index} className="flex flex-col justify-center items-center">
            <Image src={nav.icon} alt="nav_icon" />
            <p className="text-xs mt-2 text-[#888888] hover:text-[#6A93FF]">{nav.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
