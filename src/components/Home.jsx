"use client";
import Image from "next/image";
import Link from "next/link";
import dev from "../../public/images/developer-removebg-preview.png";
import { motion } from "framer-motion";
import { RiFolderDownloadFill, RiProfileFill } from "react-icons/ri";
import { IoIosMailUnread } from "react-icons/io";
import { useEffect, useState } from "react";
import Loader from "./Loader";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/about`, {
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
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        data &&
        data?.map((item, index) => (
          <header
            key={index}
            className="flex flex-col xl:flex-row align-middle  justify-center items-center mt-10 xl:mt-0 mb-[120px] lg:mb:[150px] xl:mb-0 "
          >
            <Image
              src={dev}
              alt="main-image"
              loading="eager"
              priority={true}
              className="  w-full xl:p-6  h-auto md:w-[700px] md:h-auto lg:w-[600px] lg:h-[600px] xl:mr-4 "
            />

            <div className="xl:w-1/2   text-center xl:text-start   mt-5 lg:mt-0 ">
              {item?.title && (
                <motion.h2
                  className=" font-bold   text-3xl sm:text-6xl xl:text-5xl tracking-wide "
                  initial={{ marginBottom: "-30px", opacity: 0 }}
                  animate={{ marginBottom: "0px", opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  {item?.title}
                </motion.h2>
              )}
              {item?.shortDesc && (
                <motion.div
                  initial={{ marginTop: "-30px", opacity: 0 }}
                  animate={{ marginTop: "0px", opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <p className="font-medium text-base mt-5 md:mt-8 xl:mt-5 text-[16px] mb-6">
                    {item?.shortDesc}
                  </p>
                </motion.div>
              )}
              {data && (
                <div className="flex justify-center xl:justify-start">
                  <ul className="flex font-medium max-[300px]:flex-col ">
                    <li
                      className="list-none  mr-3  rounded-md bg-black dark:bg-white text-white dark:text-black  border-solid border-2 border-black
   dark:border-white  hover:scale-95 transition-all duration-300 ease-in-out max-[300px]:mr-0 max-[300px]:mb-3"
                    >
                      <Link
                        target="_blank"
                        aria-label="Resume"
                        href={`${item?.resume}`}
                        className=" flex items-center    py-[6px] px-3 text-base "
                      >
                        Download CV
                        <span className="ml-2">
                          <RiFolderDownloadFill size={20} className="" />
                        </span>
                      </Link>
                    </li>
                    <li className=" border-solid border-2 border-black dark:border-white hover:scale-95  transition-all duration-300 ease-in-out rounded-md ">
                      <Link
                        href="/about"
                        aria-label="Contact"
                        className="flex items-center py-[6px]  px-3 text-base  "
                      >
                        Know more
                        <span className="ml-2">
                          <RiProfileFill size={20} />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </header>
        ))
      )}
    </>
  );
};
export default Home;
