"use client";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import AnimatedText from "./AnimatedText";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoIosMailUnread } from "react-icons/io";
import { RiFolderDownloadFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import Loader from "./Loader";
const Info = dynamic(() => import("@/components/Info"));

const AboutMe = async () => {
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
          <div className=" mt-[40px]   ">
            <AnimatedText text="Passion Fuels Purpose!" />
            <div className="  grid grid-cols-2 my-14  gap-8 lg:gap-14 2xl:gap-3 place-items-center">
              {/* <div
            className=" col-span-2 xl:col-span-1 w-fit border-solid border-4 border-r-[12px] rounded-tr-3xl rounded-br-3xl rounded-bl-3xl border-b-[12px]  border-black
           dark:border-white rounded-2xl p-5 "
          >
            <Image
              src={mypic}
              alt="My Pic"
              loading="eager"
              priority={true} 
              className="rounded-lg w-[100%] h-auto  object-cover "
            />
          </div> 
           xl:-ml-16 xl:mr-20*/}
              {data && (
                <div className="  col-span-2 items-center flex flex-col justify-center xl:-mt-3 align-start text-center   ">
                  <div className="font-bold text-[28px]">{item?.role}</div>
                  <div className="mt-6 text-black dark:text-white font-medium">
                    <p>{item?.description[0]}</p>
                    <p>{item?.description[1]}</p>
                  </div>

                  <nav className=" flex justify-center xl:justify-start items-center my-6">
                    <Link
                      href="https://instagram.com/ashwin.203?igshid=YmMyMTA2M2Y="
                      className="mr-3"
                      aria-label="Instagram"
                      target="_blank"
                    >
                      <FaInstagram size={25} />
                    </Link>
                    <Link
                      href="https://github.com/Ashwin201"
                      className="mr-3"
                      aria-label="Github"
                      target="_blank"
                    >
                      <FaGithub size={25} />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/ashmin-sharma-6a4867257"
                      className="mr-3"
                      aria-label="Linkedin"
                      target="_blank"
                    >
                      <FaLinkedin size={25} />
                    </Link>
                  </nav>
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
                          href="/contact"
                          aria-label="Contact"
                          className="flex items-center py-[6px]  px-3 text-base  "
                        >
                          Get in Touch
                          <span className="ml-2">
                            <IoIosMailUnread size={25} />
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <Info />
          </div>
        ))
      )}
    </>
  );
};

export default AboutMe;
