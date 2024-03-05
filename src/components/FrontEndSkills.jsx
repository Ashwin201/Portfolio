import React from "react";
import Image from "next/image";
import redux from "../../public/images/redux.webp";
import {
  Bootstrap,
  Css,
  Html,
  Js,
  NextJs,
  Reactjs,
  Tailwind,
} from "../../public/SkillIcons";

const FrontEndSkills = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center align-middle lg:justify-between mb-10 ">
        <div className="font-bold text-center lg:text-start mb-10 lg:mb-0 text-3xl xl:mr-60">
          Front-End Development
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 align-content-end gap-10 lg:gap-16">
          <div className=" flex flex-col items-center ">
            <span className="rounded-[50%] w-[60px] h-[60px] shadow-lg p-[6px]  flex justify-center items-center">
              <Html />
            </span>
            <span className="  font-semibold mt-2 text-text1  text-[12.5px] text-center">
              Html
            </span>
          </div>
          <div className=" flex flex-col items-center ">
            <span className="rounded-[50%] w-[60px] h-[60px] shadow-lg p-[6px]  flex justify-center items-center">
              <Css />
            </span>
            <span className="  font-semibold mt-2 text-text1  text-[12.5px] text-center">
              Css
            </span>
          </div>
          <div className=" flex flex-col items-center ">
            <span className="rounded-[50%] w-[60px] h-[60px] shadow-lg p-[6px]  flex justify-center items-center">
              <Js />
            </span>
            <span className="  font-semibold mt-2 text-text1  text-[12.5px] text-center">
              Javascript
            </span>
          </div>
          <div className=" flex flex-col items-center ">
            <span className="rounded-[50%] w-[60px] h-[60px] shadow-lg p-[6px]  flex justify-center items-center">
              <Reactjs />
            </span>
            <span className="  font-semibold mt-2 text-text1  text-[12.5px] text-center">
              React
            </span>
          </div>
          {/* <div className=" flex flex-col items-center ">
            <span className="rounded-[50%] w-[60px] h-[60px] shadow-lg p-[6px]  flex justify-center items-center">
              <NextJs />
            </span>
            <span className="  font-semibold mt-2 text-text1  text-[12.5px] text-center">
              Nextjs
            </span>
          </div> */}
          <div className=" flex flex-col items-center ">
            <span className="rounded-[50%] w-[60px] h-[60px] shadow-lg p-[6px]  flex justify-center items-center">
              <Bootstrap />
            </span>
            <span className="  font-semibold mt-2 text-text1  text-[12.5px] text-center">
              Bootstrap
            </span>
          </div>
          <div className=" flex flex-col items-center ">
            <span className="rounded-[50%] w-[60px] h-[60px] shadow-lg p-[6px]  flex justify-center items-center">
              <Tailwind />
            </span>
            <span className="  font-semibold mt-2 text-text1  text-[12.5px] text-center">
              Tailwind
            </span>
          </div>
          <div className=" flex flex-col items-center ">
            <span className="rounded-[50%] w-[60px] h-[60px] shadow-lg p-[6px]  flex justify-center items-center">
              <Image src={redux} alt="Strapi " className="w-[90px] " />
            </span>
            <span className="  font-semibold mt-2 text-text1  text-[12.5px] text-center">
              Redux <br /> Toolkit
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontEndSkills;
