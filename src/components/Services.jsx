import React from "react";
import AnimatedText from "./AnimatedText";
import Image from "next/image";
import fast from "../../public/images/fast.webp";
import responsive from "../../public/images/responsive.webp";
import design from "../../public/images/webdesign.webp";
import seo from "../../public/images/SEO.webp";

const Services = async () => {
  return (
    <div className="mt-[100px]  md:px-16">
      <AnimatedText text="Services!" />
      <div className="mt-[60px] grid grid-cols-1 lg:grid-cols-2  gap-10 ">
        <div className="flex flex-col items-center justify-center p-8">
          <div className="mb-5">
            <Image src={design} width={180} height={"auto"} alt="service" />
          </div>
          <div className="font-bold text-center   lg:mb-0 text-3xl ">
            Web Design&apos;s
          </div>
          <p className="mt-6 text-center font-medium">
            Specialize in creating customized, interactive, and visually
            appealing designs to meet your preferences and needs.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center p-8">
          <div className="mb-5">
            <Image src={fast} width={180} height={"auto"} alt="service" />
          </div>
          <div className="font-bold text-center   lg:mb-0 text-3xl ">
            Quick Load Website
          </div>
          <p className="mt-6 text-center font-medium">
            Ensuring swift website loading times, seamless interaction without
            lag, and delivering an optimal user experience are my top
            priorities.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center p-8">
          <div className="mb-5">
            <Image src={responsive} width={180} height={"auto"} alt="service" />
          </div>
          <div className="font-bold text-center   lg:mb-0 text-3xl ">
            Cross-Device Compatible Website
          </div>
          <p className="mt-6 text-center font-medium">
            Websites are designed to be compatible with a variety of
            resolutions, including those of desktops, tablets, and mobile
            devices, ensuring a seamless user experience across different
            platforms.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center p-8">
          <div className="mb-5">
            <Image src={seo} width={180} height={"auto"} alt="service" />
          </div>
          <div className="font-bold text-center   lg:mb-0 text-3xl ">
            Search Engine Optimization
          </div>
          <p className="mt-6 text-center font-medium">
            Proficient in delivering websites that are highly optimized for
            search engines, ensuring optimal visibility and performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
