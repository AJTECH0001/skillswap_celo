import Link from "next/link";
import React from "react";
import SkillImg1 from "../../assets/skills1.svg";
import SkillImg2 from "../../assets/skills2.svg";
import Stars from "../../assets/stars.svg";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const Skills = () => {
  const skills = [
    {
      image: SkillImg1,
      title: "Graphic Design",
      description:
        "Professional graphic design services to elevate your brand.",
      ratings: 3.8,
    },
    {
      image: SkillImg2,
      title: "Web Development",
      description: "Custom websites and web applications.",
      ratings: 4.7,
    },
  ];

  return (
    <div className="mt-11">
      <div className="flex justify-between">
        <p className="text-sm text-[#888888]">Explore Skills</p>
        <Link href="/skills" className="text-sm text-[#6A93FF]">
          View all
        </Link>
      </div>

      <div className="flex space-x-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#F8F8F8] rounded-[8px] pb-2 mt-4 w-1/2 flex flex-col"
          >
            <Image
              src={skill.image}
              alt="skillimage_"
              className="rounded-t-[8px]"
            />

            <div className="px-2 mt-3">
              <h2 className="text-sm font-semibold">{skill.title}</h2>
              <p className="text-xs text-[#888888] font-medium mt-1">
                {skill.description}
              </p>
            </div>

            <div className="px-2 flex flex-col flex-1 justify-end">
              <p className="text-[10px] mt-2">
                Ratings:{" "}
                <span className="text-[#6A93FF] font-semibold">
                  {skill.ratings}
                </span>
              </p>
              <div className="flex space-x-1 mt-1">
                {[...Array(5)].map((_, index) => {
                  const star = index + 1;
                  return (
                    <StarIcon
                      key={index}
                      className={`${
                        star <= Math.round(skill.ratings)
                          ? "text-[#6A93FF]"
                          : "text-[#C4DBFF]"
                      } h-3 w-3`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
