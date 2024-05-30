import React from "react";
import SkillIcon from "../../assets/skill.svg";
import ExchangeIcon from "../../assets/exchange.svg";
import WorkshopIcon from "../../assets/workshop.svg";
import Image from "next/image";

const Stats = () => {
  const stats = [
    {
      icon: SkillIcon,
      title: "Skill listed",
      amount: "5",
    },
    {
      icon: ExchangeIcon,
      title: "Exchanges",
      amount: "0",
    },
    {
      icon: WorkshopIcon,
      title: "Workshops",
      amount: "0",
    },
  ];
  return (
    <div className="bg-[#6A93FF] text-[#EFEFEF] rounded-[6px] mt-4 px-3 py-5">
      <p className="text-sm mb-5">Quick Stats</p>

      <div className="flex justify-between">
        {stats.map((stat) => (
          <div className="flex items-center space-x-2">
            <div className="flex justify-center items-center w-[30px] h-[30px] bg-white/20 rounded-[4px] border-[1px] border-white">
              <span className="w-[25px] h-[25px] flex justify-center items-center">
                <Image src={stat.icon} alt="icon_" />
              </span>
            </div>

            <div>
              <p className="text-xs">{stat.title}</p>
              <p className="font-semibold text-sm">{stat.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
