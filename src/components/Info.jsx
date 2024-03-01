import React from "react";
import { client } from "../lib/sanity";
import { GoDotFill } from "react-icons/go";
const getData = async () => {
  const query = `*[_type=="experience"]{
      id,
      title,
      company,
      duration,
      description,
  }`;
  const data = await client.fetch(query);
  return data;
};

const Info = async () => {
  const data = await getData();
  const sortedData = data.sort((a, b) => a.id - b.id);
  return (
    <>
      <div className=" mb-[150px] sm:px-12 lg:px-20 xl:px-52 ml-4 sm:ml-0">
        <h1 className="items-center text-center font-bold text-5xl sm:text-[55px] lg:text-[65px] mt-24 mb-20">
          Education
        </h1>
        <div className="flex flex-col text-start ">
          <div className=" border-l-[3px] border-black dark:border-white   ">
            <div className="relative ml-[30px] sm:ml-[65px] mb-16 ">
              <div className="  font-bold text-[25px] sm:text-[30px]  mb-3">
                High School
              </div>
              <div className="  text-xl mb-3 font-bold">2019-2021</div>
              <p className=" flex items-start gap-1 font-medium text-black dark:text-white  text-base">
                I have accomplished my high school education at Government
                Senior Secondary School, Jhajjar, Haryana, specializing in the
                Non-Medical Stream, during the academic session of 2019-2021.
              </p>
              <span className=" absolute top-0 left-0  flex justify-center align-middle items-center w-[27px] h-[27px]  sm:w-[30px] sm:h-[30px] bg-white dark:bg-black border-black dark:border-white border-[3px] -ml-[45px] sm:-ml-[81px] rounded-[50%]">
                <span className="w-[12px] h-[12px] sm:w-[15px] sm:h-[15px] bg-black dark:bg-white  rounded-[50%]"></span>
              </span>
            </div>
            <div className="relative ml-[30px] sm:ml-[65px] ">
              <div className="  font-bold text-[25px] sm:text-[30px] mb-3">
                Bachelor&apos;s Degree
              </div>
              <div className="  text-xl mb-3 font-bold">2021-Present</div>
              <p className=" flex items-start gap-1 font-medium text-black dark:text-white  text-base">
                I am currently enrolled in the Bachelor&apos;s program in
                Computer Science and Engineering at Ganga Institute of
                Technology and Management, located in Kablana, Jhajjar.
              </p>

              <span className=" absolute top-0 left-0  flex justify-center align-middle items-center  w-[27px] h-[27px]  sm:w-[30px] sm:h-[30px] bg-white dark:bg-black border-black dark:border-white  border-[3px] -ml-[45px] sm:-ml-[81px] rounded-[50%]">
                <span className="w-[12px] h-[12px] sm:w-[15px] sm:h-[15px] bg-black dark:bg-white  rounded-[50%]"></span>
              </span>
            </div>
          </div>
        </div>

        <div>
          <h1 className="items-center text-center font-bold text-5xl sm:text-[55px] lg:text-[65px] mt-24 mb-20 ">
            Experience
          </h1>
          <div className="flex flex-col text-start ">
            <div className=" flex flex-col gap-16 border-l-[3px] border-black dark:border-white  ">
              {sortedData &&
                sortedData?.map((item) => (
                  <div
                    className="relative ml-[30px] sm:ml-[65px] flex flex-col gap-3  "
                    key={item.id}
                  >
                    <div className=" flex flex-col sm:flex-row gap-3 sm:items-center text-start">
                      <h3 className="  font-bold text-[25px] sm:text-[30px] ">
                        {item.title}
                      </h3>
                      <h5 className=" hidden  pb-1 text-blue-700 font-bold text-[23px] sm:text-[25px] ">
                        @CodeSoft
                      </h5>
                    </div>
                    <p className="  text-xl font-bold">{item.duration}</p>
                    <div className=" flex flex-col gap-2">
                      <p className=" flex items-start gap-1 font-medium text-black dark:text-white  text-base">
                        {item.description}
                      </p>
                    </div>
                    <span className=" absolute top-0 left-0  flex justify-center align-middle items-center  w-[27px] h-[27px]  sm:w-[30px] sm:h-[30px] bg-white dark:bg-black border-black dark:border-white  border-[3px] -ml-[45px] sm:-ml-[81px] rounded-[50%]">
                      <span className="w-[12px] h-[12px] sm:w-[15px] sm:h-[15px] bg-black  dark:bg-white  rounded-[50%]"></span>
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
