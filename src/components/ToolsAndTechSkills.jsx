import React from "react";
import Image from "next/image";
import git from "../../public/images/git.webp";
import github from "../../public/images/github.webp";
import { Cpp, Java } from "../../public/SkillIcons";

const ToolsAndTechSkills = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center  lg:justify-between mt-10">
        <div className="font-bold text-center lg:text-start mb-10 lg:mb-0 text-3xl xl:mr-60">
          Tools and Technologies
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-[70px]">
          <div className=" flex flex-col items-center ">
            <span className="rounded-[50%] w-[60px] h-[60px] shadow-lg p-[6px]  flex justify-center items-center">
              <Image src={git} alt="Git" className="w-[90px] " />
            </span>
            <span className="  font-semibold mt-2 text-text1  text-[12.5px] text-center">
              Git
            </span>
          </div>
          <div className=" flex flex-col items-center ">
            <span className="rounded-[50%] w-[60px] h-[60px] shadow-lg p-[6px]  flex justify-center items-center">
              <Image src={github} alt="Git" className="w-[90px] " />
            </span>
            <span className="  font-semibold mt-2 text-text1  text-[12.5px] text-center">
              Github
            </span>
          </div>
          <div className=" flex flex-col items-center ">
            <span className="rounded-[50%] w-[60px] h-[60px] shadow-lg p-[6px]  flex justify-center items-center">
              <Java />
            </span>
            <span className="  font-semibold mt-2 text-text1  text-[12.5px] text-center">
              Java
            </span>
          </div>
          {/* <div className=" flex flex-col items-center ">
              <span className="rounded-[50%] w-[60px] h-[60px] shadow-lg p-[6px]  flex justify-center items-center">
                <Cpp />
              </span>
              <span className="  font-semibold mt-2 text-text1  text-[12.5px] text-center">
                C++
              </span>
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default ToolsAndTechSkills;
