"use client";
import Image from "next/image";
import { TiWeatherSunny } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsInfoCircleFill, BsFillFileEarmarkTextFill } from "react-icons/bs";
import { BiMenuAltRight, BiSolidBriefcase } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { AiFillHome } from "react-icons/ai";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "../../public/images/logo.webp";

import { usePathname } from "next/navigation";
import ThemeSwitcher from "./ThemeSwitcher";
import { IoMdContact } from "react-icons/io";
import AdminNavbar from "./AdminComponents/AdminNavbar";
import { useSession } from "next-auth/react";
const Navbar = () => {
  const pathName = usePathname();
  const { data: session } = useSession();
  const [menuopen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuopen);
  };

  const navigation = [
    {
      id: 1,
      title: "Home",
      href: "/",
    },

    {
      id: 2,
      title: "About",
      href: "/about",
    },
    {
      id: 3,
      title: "Skills",
      href: "/skill",
    },
    {
      id: 4,
      title: "Projects",
      href: "/project",
    },
    {
      id: 5,
      title: "Contact",
      href: "/contact",
    },
  ];
  return session && pathName.startsWith("/admin") ? (
    <AdminNavbar />
  ) : (
    <div>
      <nav className=" sticky   top-0 bg-bg font-medium flex justify-between items-center align-middle mb-3">
        <Link href="/" aria-label="Home">
          <Image src={logo} alt="logo" width={32} height={32} />
        </Link>
        <ul className=" hidden sm:flex items-center gap-8 ">
          {navigation.map((item) => (
            <li key={item.id}>
              <Link
                aria-label={item.title}
                href={item.href}
                className={` relative font-medium text-gray-900 hover:text-gray-950 hover:font-semibold dark:text-gray-50 dark:hover:text-gray-300  transition-all duration-300 ${
                  item.href === pathName && " font-semibold text-[17px]"
                } `}
              >
                {item.title}
                <span
                  className={`absolute inline-block left-0 -bottom-1  h-[1.8px] w-full  transition-all duration-500 ease-in-out 
                  ${item.href === pathName && " bg-black dark:bg-white "}`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>

        <div className=" hidden sm:flex items-center ">
          <ThemeSwitcher />
          <nav className="  hidden lg:ml-3 lg:flex items-center">
            <Link
              href="https://instagram.com/ashwin.203?igshid=YmMyMTA2M2Y="
              className="mr-3"
              aria-label="Insta"
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
        </div>
        <div className=" flex items-center justify-center sm:hidden gap-3 cursor-pointer">
          <ThemeSwitcher />
          <div
            className=" text-black dark:text-gray-300 flex flex-col items-end animate-pulse duration-700"
            onClick={handleNav}
          >
            <BiMenuAltRight size={40} />
          </div>
        </div>
      </nav>
      <div className=" block sm:hidden  ">
        <div
          className={
            menuopen
              ? "fixed z-50  top-0 right-0 w-60 h-screen transition-all ease-in-out duration-80 bg-slate-100 dark:bg-black border-r-1 rounded-r-[40px] shadow-lg shadow-gray-300 dark:shadow-gray-800 "
              : " fixed z-50  top-0 -right-full h-screen transition-all ease-in-out rounded-l-3xl duration-800"
          }
          onClick={handleNav}
        >
          <span
            className=" mt-[18px] mr-8 flex justify-end  cursor-pointer"
            onClick={handleNav}
          >
            <RxCross2 size={27} />
          </span>

          <ul className="flex justify-start  flex-col mt-5 pt-5 ml-6 items-start">
            <Link
              href="/"
              className="  flex items-center text-start font-medium mb-5 text-text1 hover:text-text2 no-underline transition-all ease-in-out duration-400"
              onClick={handleNav}
              aria-label="Home"
            >
              <AiFillHome size={22} />
              <span className="ml-2">Home</span>
            </Link>
            <Link
              href="/about"
              aria-label="About"
              className="flex items-center text-start font-medium mb-5 text-text1 hover:text-text2 cursor-pointer no-underline transition-all ease-in-out duration-400"
              onClick={handleNav}
            >
              <BsInfoCircleFill size={20} />
              <span className="ml-2">About</span>
            </Link>
            <Link
              href="/skill"
              aria-label="Skill"
              className=" flex items-center text-start font-medium mb-5 text-text1 hover:text-text2 cursor-pointer no-underline transition-all ease-in-out duration-400"
              onClick={handleNav}
            >
              <BsFillFileEarmarkTextFill size={20} />
              <span className="ml-2">Skills</span>
            </Link>
            <Link
              href="/project"
              aria-label="Projects"
              className="flex items-center text-start font-medium mb-5 text-text1 hover:text-text2 cursor-pointer no-underline transition-all ease-in-out duration-400"
              onClick={handleNav}
            >
              <BiSolidBriefcase size={22} />
              <span className="ml-2">Projects</span>
            </Link>
            <Link
              href="/contact"
              aria-label="Contact"
              className="flex items-center text-start font-medium mb-5 text-text1 hover:text-text2 cursor-pointer no-underline transition-all ease-in-out duration-400"
              onClick={handleNav}
            >
              <IoMdContact size={23} />
              <span className="ml-2">Contact</span>
            </Link>

            <div className="social flex mt-3 cursor-pointer items-center">
              <ThemeSwitcher />
              <Link
                href="https://instagram.com/ashwin.203?igshid=YmMyMTA2M2Y="
                className="mx-3 "
                aria-label="Instagram"
                onClick={handleNav}
                target="_blank"
              >
                <FaInstagram size={25} />
              </Link>

              <Link
                href="https://github.com/Ashwin201"
                aria-label="Github"
                className="mr-3"
                onClick={handleNav}
                target="_blank"
              >
                <FaGithub size={25} />
              </Link>

              <Link
                href="https://www.linkedin.com/in/ashmin-sharma-6a4867257"
                className="mr-3"
                aria-label="Linkedin"
                onClick={handleNav}
                target="_blank"
              >
                <FaLinkedin size={25} />
              </Link>

              {/* <Link
                  href="tel:8607343110"
                  aria-label="phone"
                  className="mr-3"
                  onClick={handleNav}
                  target="_blank"
                >
                  <PhoneIcon />
                </Link> */}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
