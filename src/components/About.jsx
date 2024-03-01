import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import AnimatedText from "./AnimatedText";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { client } from "../lib/sanity";
import { IoIosMailUnread } from "react-icons/io";
import { RiFolderDownloadFill } from "react-icons/ri";
const Info = dynamic(() => import("@/components/Info"));

const getData = async () => {
  const query = `*[_type=="about"]{
    id,
      role,
      description,
      link
  }`;
  const data = await client.fetch(query);
  return data;
};

const AboutMe = async () => {
  const data = await getData();
  return (
    <>
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
          <div className="  col-span-2 items-center flex flex-col justify-center xl:-mt-3 align-start text-center   ">
            {data &&
              data?.map((item) => (
                <div key={item.id}>
                  <div className="font-bold text-[28px]">{item.role}</div>
                  <div className="mt-6 text-black dark:text-white font-medium sm:mx-6 md:mx-10 lg:mx-14">
                    <p>{item.description[0]}</p>
                    <p>{item.description[1]}</p>
                  </div>
                </div>
              ))}

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
                  {data &&
                    data.map((item) => (
                      <Link
                        key={item.id}
                        aria-label="Resume"
                        href={`${item.link}`}
                        className=" flex items-center    py-[6px] px-3 text-base "
                      >
                        <span className="mr-2">
                          <RiFolderDownloadFill size={20} className="" />
                        </span>
                        Download CV
                      </Link>
                    ))}
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
        </div>
        <Info />
      </div>
    </>
  );
};

export default AboutMe;
