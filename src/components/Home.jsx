"use client";
import Image from "next/image";
import Link from "next/link";
import dev from "../../public/images/developer-removebg-preview.png";
import { motion } from "framer-motion";
import { RiFolderDownloadFill, RiProfileFill } from "react-icons/ri";
import CVButton from "./CVButton";

const Home = () => {
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
          <motion.h2
            className=" font-bold   text-3xl sm:text-6xl xl:text-5xl tracking-wide "
            initial={{ marginBottom: "-30px", opacity: 0 }}
            animate={{ marginBottom: "0px", opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Turning Vision Into Reality With Code And Design.
          </motion.h2>

          <motion.div
            initial={{ marginTop: "-30px", opacity: 0 }}
            animate={{ marginTop: "0px", opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-medium text-base mt-5 md:mt-8 xl:mt-5 text-[16px] mb-6">
              As a full-stack developer, I specialize in transforming creative
              ideas into innovative web applications. With a touch of pixel
              magic, I craft visually stunning and responsive websites. Explore
              my latest projects to witness my expertise in Next.js and web
              development.
            </p>
          </motion.div>

          <div className="flex justify-center xl:justify-start">
            <ul className="flex font-medium max-[300px]:flex-col ">
              <CVButton />
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
        </div>
      </header>
    </>
  );
};
export default Home;
