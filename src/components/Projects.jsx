"use client";
import Link from "next/link";
import Image from "next/image";
import AnimatedText from "./AnimatedText";
import { BsGithub } from "react-icons/bs";

import { useEffect, useState } from "react";
import Loader from "./Loader";
const FeaturedProject = ({ type, image, title, summary, link, github }) => {
  return (
    <main
      className=" flex  flex-col justify-center  md:flex-row  md:justify-between p-3 min-[320px]:p-5  sm:p-6 border-solid border-4 border-r-[12px] rounded-tr-3xl rounded-br-3xl 
    rounded-bl-3xl border-b-[12px]  border-black dark:border-white  rounded-2xl mx-[12px] hover:scale-[.99] ease-in-out duration-500 group cursor-pointer"
    >
      <div className="grid grid-cols-2 gap-0  lg:gap-10">
        <div className=" col-span-2 lg:col-span-1 group-hover:scale-[.99] ease-in-out duration-500">
          <img
            src={image}
            alt={title}
            loading="eager"
            className="w-full h-full rounded-2xl object-cover "
          />
        </div>
        <div className=" col-span-2 lg:col-span-1 flex flex-col justify-center gap-[6px]  ">
          <p className="text-xl text-text1 font-semibold  mt-6 lg:mt-0">
            {type}
          </p>
          <div className="font-bold text-2xl ">{title}</div>
          <p className="  font-medium line-clamp-5 ">{summary}</p>
          <div className=" flex justify-between items-center mt-1">
            <Link href={`${github}`} aria-label="link" target="_blank">
              <BsGithub size={38} />
            </Link>
            <Link
              href={`${link}`}
              aria-label="Project Detail Link"
              className="font-semibold text-[17px] underline text-gray-900 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-400 transition-all duration-300"
            >
              Know More{" "}
              <span className=" sr-only">View detail page of {title}</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
const FeaturedProjectRight = ({
  type,
  image,
  title,
  summary,
  link,
  github,
}) => {
  return (
    <main
      className=" flex flex-col justify-center  md:flex-row  md:justify-between p-3 min-[320px]:p-5 sm:p-6 border-solid border-4 border-r-[12px] rounded-tr-3xl rounded-br-3xl 
    rounded-bl-3xl border-b-[12px]  border-black dark:border-white  rounded-2xl mx-[12px] hover:scale-[.99] ease-in-out duration-500 group cursor-pointer"
    >
      <div className="grid grid-cols-2 gap-0  lg:gap-10">
        <div className=" block lg:hidden col-span-2 lg:col-span-1 group-hover:scale-[.99] ease-in-out duration-500">
          <img
            src={image}
            loading="eager"
            alt={title}
            className="w-full h-full rounded-2xl object-cover "
          />
        </div>
        <div className=" col-span-2 lg:col-span-1 flex flex-col justify-center gap-[6px] ">
          <p className="text-xl text-text1 font-semibold mt-6 lg:mt-0 ">
            {type}
          </p>
          <div className="font-bold text-2xl ">{title}</div>
          <p className="  font-medium line-clamp-5 ">{summary}</p>
          <div className=" flex justify-between items-center mt-1">
            <Link href={`${github}`} aria-label="Github" target="_blank">
              <BsGithub size={38} />
            </Link>
            <Link
              href={`${link}`}
              aria-label="Project Detail Link"
              className="font-semibold text-[17px] underline text-gray-900 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-400 transition-all duration-300"
            >
              Know More{" "}
              <span className=" sr-only">View detail page of {title}</span>
            </Link>
          </div>
        </div>
        <div className=" hidden lg:block col-span-2 lg:col-span-1 group-hover:scale-[.99] ease-in-out duration-500">
          <img
            src={image}
            alt={title}
            loading="eager"
            className="w-[100%] h-auto sm:h-[280px] lg:h-full  rounded-2xl "
          />
        </div>
      </div>
    </main>
  );
};

const Projects = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/project`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.ok) {
          const info = await res.json();

          setData(info);
          setLoading(false);
        }
      } catch (error) {}
    };
    fetchData();
  }, []);

  const projects = data?.slice().reverse();
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="mt-[40px] sm:mt[70px]  mb-[120px] sm:px-10  md:px-3 lg:px-0 xl:px-24 2xl:px-[130px]">
          <AnimatedText text="Imagination Trumps Knowledge!" />

          <div className="grid grid-cols-2 gap-12 sm:gap-16 mt-[60px]">
            {projects.slice().reverse() &&
              projects?.map((item, index) =>
                index % 2 === 0 ? (
                  <div key={index} className="col-span-2 ">
                    <FeaturedProjectRight
                      type={item?.category}
                      image={item?.image[0]}
                      title={item?.title}
                      summary={item?.description}
                      link={`/project/${item?._id}`}
                      github={item?.github}
                    />
                  </div>
                ) : (
                  <div key={index} className="col-span-2 ">
                    <FeaturedProject
                      type={item?.category}
                      image={item?.image[0]}
                      title={item?.title}
                      summary={item?.description}
                      link={`/project/${item?._id}`}
                      github={item?.github}
                    />
                  </div>
                )
              )}
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
