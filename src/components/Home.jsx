"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dev from "../../public/images/developer-removebg-preview.png";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { client } from "../lib/sanity";
import { RiFolderDownloadFill } from "react-icons/ri";
import { IoIosMailUnread } from "react-icons/io";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type=="about"]{
            id,
            title,
            shortDesc,
            link
        }`;
        const data = await client.fetch(query);
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on component mount
  return (
    <>
      <header className="flex flex-col xl:flex-row align-middle  justify-center items-center mt-10 xl:mt-0 mb-[120px] lg:mb:[150px] xl:mb-0 ">
        <Image
          src={dev}
          alt="main-image"
          loading="eager"
          priority={true}
          className="  w-full xl:p-6  h-auto md:w-[700px] md:h-auto lg:w-[600px] lg:h-[600px] xl:mr-4 "
        />

        <div className="xl:w-1/2   text-center xl:text-start   mt-5 lg:mt-0 ">
          {data &&
            data?.map((item) => (
              <div key={item.id}>
                <motion.h2
                  className=" font-bold   text-3xl sm:text-6xl xl:text-5xl tracking-wide "
                  initial={{ marginBottom: "-30px", opacity: 0 }}
                  animate={{ marginBottom: "0px", opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  {item.title}
                </motion.h2>
                <motion.div
                  initial={{ marginTop: "-30px", opacity: 0 }}
                  animate={{ marginTop: "0px", opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <p className="font-medium text-base mt-5 md:mt-8 xl:mt-5 text-[16px] mb-6">
                    {item.shortDesc}
                  </p>
                </motion.div>
                <div className="flex justify-center xl:justify-start">
                  <ul className="flex font-medium max-[300px]:flex-col ">
                    <li
                      className="list-none  mr-3  rounded-md bg-black dark:bg-white text-white dark:text-black  border-solid border-2 border-black
         dark:border-white  hover:scale-95 transition-all duration-300 ease-in-out max-[300px]:mr-0 max-[300px]:mb-3"
                    >
                      <Link
                        href={`${item.link}`}
                        aria-label="Resume"
                        className=" flex items-center    py-[6px] px-3 text-base "
                      >
                        <span className="mr-2">
                          <RiFolderDownloadFill size={20} className="" />
                        </span>
                        Download CV
                      </Link>
                    </li>
                    <li className=" border-solid border-2 border-black dark:border-white hover:scale-95  transition-all duration-300 ease-in-out rounded-md ">
                      <Link
                        href="/contact"
                        aria-label="Contact"
                        className="flex items-center py-[6px]  px-3 text-base  "
                      >
                        <span className="mr-2">
                          <IoIosMailUnread size={22} />
                        </span>
                        Get in Touch
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
        </div>
      </header>
    </>
  );
};
export default Home;
