"use client";
import React, { useEffect, useState } from "react";
import { RiFolderDownloadFill } from "react-icons/ri";
import Link from "next/link";
const CVButton = () => {
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
        <li
          className="list-none  mr-3  rounded-md bg-black dark:bg-white text-white dark:text-black  border-solid border-2 border-black
  dark:border-white  hover:scale-95 transition-all duration-300 ease-in-out max-[300px]:mr-0 max-[300px]:mb-3"
        >
          <Link
            target="_blank"
            aria-label="Resume"
            href={`/`}
            className=" flex items-center    py-[6px] px-3 text-base "
          >
            Download CV
            <span className="ml-2">
              <RiFolderDownloadFill size={20} className="" />
            </span>
          </Link>
        </li>
      ) : (
        data?.map((item, index) => (
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
                <RiFolderDownloadFill size={20} />
              </span>
            </Link>
          </li>
        ))
      )}
    </>
  );
};

export default CVButton;
