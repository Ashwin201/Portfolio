import Link from "next/link";
import AnimatedText from "./AnimatedText";
import { BsGithub } from "react-icons/bs";
import { client } from "../lib/sanity";

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
            width={100}
            height={100}
            className="w-full h-full rounded-2xl object-cover "
          />
        </div>
        <div className=" col-span-2 lg:col-span-1 flex flex-col justify-center gap-[6px]  ">
          <p className="text-xl text-text1 font-semibold  mt-6 lg:mt-0">
            {type}
          </p>
          <div className="font-bold text-2xl ">{title}</div>
          <p className="  font-medium ">{summary}</p>
          <div className=" flex justify-between items-center mt-1">
            <Link href={`${github}`} aria-label="link" target="_blank">
              <BsGithub size={38} />
            </Link>
            <Link
              href={`${link}`}
              target="_blank"
              aria-label="See Live"
              className="font-semibold text-[17px] underline hover:text-gray-600  transition-all duration-300"
            >
              See Live
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
            alt={title}
            loading="eager"
            width={100}
            height={100}
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>
        <div className=" col-span-2 lg:col-span-1 flex flex-col justify-center gap-[6px] ">
          <p className="text-xl text-text1 font-semibold mt-6 lg:mt-0 ">
            {type}
          </p>
          <div className="font-bold text-2xl ">{title}</div>
          <p className="  font-medium ">{summary}</p>
          <div className=" flex justify-between items-center mt-1">
            <Link href={`${github}`} aria-label="Github" target="_blank">
              <BsGithub size={38} />
            </Link>
            <Link
              href={`${link}`}
              target="_blank"
              aria-label="See Live"
              className="font-semibold text-[17px] underline hover:text-gray-600  transition-all duration-300"
            >
              See Live
            </Link>
          </div>
        </div>
        <div className=" hidden lg:block col-span-2 lg:col-span-1 group-hover:scale-[.99] ease-in-out duration-500">
          <img
            src={image}
            alt={title}
            loading="eager"
            width={100}
            height={100}
            className="w-[100%] h-auto sm:h-[280px] lg:h-full  rounded-2xl "
          />
        </div>
      </div>
    </main>
  );
};

const getData = async () => {
  const query = `*[_type=="projects"]{
      id,
      category,
      title,
      description,
      live,
      github,
      "image":image.asset->url
  }`;
  const data = await client.fetch(query);
  return data;
};

const Projects = async () => {
  const data = await getData();
  const sortedData = data.sort((a, b) => a.id - b.id);
  const finalData = sortedData.reverse();
  console.log(data);

  return (
    <>
      <div className="mt-[40px] sm:mt[70px]  mb-[120px] sm:px-10  md:px-3 lg:px-0 xl:px-24 2xl:px-[130px]">
        <AnimatedText text="Imagination Trumps Knowledge!" />

        <div className="grid grid-cols-2 gap-12 sm:gap-16 mt-[60px]">
          {finalData &&
            finalData?.map((item) =>
              item.id % 2 === 0 ? (
                <div className="col-span-2 " key={item.id}>
                  <FeaturedProjectRight
                    type={item.category}
                    image={item.image}
                    title={item.title}
                    summary={item.description}
                    link={item.live}
                    github={item.github}
                  />
                </div>
              ) : (
                <div className="col-span-2 " key={item.id}>
                  <FeaturedProject
                    type={item.category}
                    image={item.image}
                    title={item.title}
                    summary={item.description}
                    link={item.live}
                    github={item.github}
                  />
                </div>
              )
            )}
        </div>
      </div>
    </>
  );
};

export default Projects;
