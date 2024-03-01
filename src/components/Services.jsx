import React from "react";
import AnimatedText from "./AnimatedText";
import Image from "next/image";
import fast from "../../public/images/fast.webp";
import responsive from "../../public/images/responsive.webp";
import design from "../../public/images/webdesign.webp";
import seo from "../../public/images/SEO.webp";
import { client } from "../lib/sanity";

const getData = async () => {
  const query = `*[_type=="services"]{
      id,
      title,
      description,
      "image":image.asset->url
  }`;
  const data = await client.fetch(query);
  return data;
};

const Services = async () => {
  const data = await getData();
  const sortedData = data.sort((a, b) => a.id - b.id);
  return (
    <div className="mt-[100px]  md:px-16">
      <AnimatedText text="Services!" />
      <div className="mt-[60px] grid grid-cols-1 lg:grid-cols-2  gap-10 ">
        {sortedData &&
          sortedData?.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center p-8"
            >
              <div className="mb-5">
                <img
                  src={item.image}
                  width={180}
                  height={"auto"}
                  alt="service"
                />
              </div>
              <div className="font-bold text-center   lg:mb-0 text-3xl ">
                {item.title}
              </div>
              <p className="mt-6 text-center font-medium">{item.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Services;
