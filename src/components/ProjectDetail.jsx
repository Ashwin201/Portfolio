"use client";
import { TbPoint, TbPointFilled } from "react-icons/tb";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward, IoIosImages } from "react-icons/io";
const ProjectDetail = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibility, setVisibility] = useState(6);

  const goToPrevSlide = () => {
    setCurrentIndex((prev) => prev - 1);
  };
  const goToNextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const handleImages = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <section className=" flex  flex-col  gap-14 mt-16 mb-28 ">
        <div className="grid grid-cols-2 gap-0  lg:gap-10 place-items-start  ">
          <div className=" col-span-2 lg:col-span-1">
            <div className=" relative ">
              <img
                src={`${data?.image?.[currentIndex]}`}
                alt="Project Image"
                width={100}
                height={100}
                className=" w-full h-auto lg:h-[320px] lg:w-full object-cover object-center rounded-md"
              />

              {currentIndex > 0 && (
                <span
                  onClick={goToPrevSlide}
                  className=" cursor-pointer absolute  top-1/2 left-3 rounded-full p-1 text-white bg-gray-400 "
                >
                  <IoIosArrowBack />
                </span>
              )}
              {currentIndex < data?.image?.length - 1 && (
                <span
                  onClick={goToNextSlide}
                  className=" cursor-pointer absolute top-1/2 right-3 rounded-full p-1 text-white bg-gray-400 "
                >
                  <IoIosArrowForward />
                </span>
              )}
            </div>
            <div>
              <div className="mt-6 grid grid-cols-5  sm:grid-cols-7 gap-3">
                {data?.image?.slice(0, visibility).map((data, index) => (
                  <div className=" col-span-1  " key={index}>
                    <Image
                      src={`${data}`}
                      alt="Image"
                      width={100}
                      height={100}
                      onClick={() => handleImages(index)}
                      className={`cursor-pointer object-cover rounded-md w-full h-[40px] 
                    ${
                      index === currentIndex
                        ? "border-gray-950 dark:border-gray-300  border-2 "
                        : "border-2 border-gray-100 dark:border-gray-950 "
                    }`}
                    />
                  </div>
                ))}
                {visibility < data?.image?.length && (
                  <div
                    onClick={() => setVisibility(visibility + 4)}
                    className="   transition-all duration-300 cursor-pointer text-gray-800 dark:text-gray-300 flex flex-col 
                     items-center justify-center text-xs font-medium   px-3 py-1 rounded-md border-2 border-gray-500"
                  >
                    <IoIosImages size={14} />
                    more
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className=" col-span-2 lg:col-span-1 flex flex-col justify-center gap-3 lg:mt-[50px]  ">
            <p className="text-xl text-text1 font-semibold  mt-6 lg:mt-0">
              {data?.category}
            </p>
            <div className="font-bold text-2xl ">{data?.title}</div>
            <p className="  font-medium line-clamp-5 ">{data?.description}</p>
            <div className="  flex justify-between datas-center mt-2">
              <Link href={data?.github} aria-label="link" target="_blank">
                <BsGithub size={38} />
              </Link>
              <Link
                href={data?.live}
                target="_blank"
                aria-label="See Live"
                className="font-semibold text-[17px] underline animate-pulse  transition-all duration-300"
              >
                See Live
              </Link>
            </div>
          </div>
        </div>

        {data?.technology && (
          <div>
            <h3 className=" font-bold text-2xl mb-5">Technologies Used 💻 </h3>
            <div className=" flex flex-wrap datas-start gap-3 sm:gap-6">
              {data?.technology &&
                data?.technology?.map((item, index) => (
                  <span
                    key={index}
                    className=" py-[6px] px-4 sm:px-6 text-base font-semibold bg-gray-950 text-gray-300 dark:bg-gray-300 dark:text-gray-950 rounded-full cursor-pointer shadow-sm dark:shadow-gray-800 shadow-gray-300 "
                  >
                    {item}
                  </span>
                ))}
            </div>
          </div>
        )}

        {data?.feature?.length > 0 && (
          <div>
            <h3 className=" font-bold text-2xl mb-5">Key Features 🚀</h3>
            <div className=" flex  flex-col gap-2">
              {data?.feature?.map((item, index) => (
                <p
                  key={index}
                  className=" flex items-start text-start  lg:items-center text-base font-semibold dark:text-gray-300 text-gray-900  "
                >
                  ◾ &nbsp; {item}
                </p>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default ProjectDetail;
