import React from "react";
const getData = async () => {
  try {
    const res = await fetch(`/api/experience`);
    if (res.ok) {
      const data = await res.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
const Info = async () => {
  const data = await getData();
  return (
    <>
      <div className=" mb-[150px] sm:px-12 lg:px-20 xl:px-52 ml-4 sm:ml-0">
        <h1 className="items-center text-center font-bold text-5xl sm:text-[55px] lg:text-[65px] mt-24 mb-20">
          Education
        </h1>
        <div className="flex flex-col text-start ">
          <div className=" border-l-[3px] border-black dark:border-white   ">
            <div className="relative ml-[30px] sm:ml-[65px] mb-16 ">
              <div className="  font-bold text-[25px] sm:text-[30px]  mb-3">
                High School
              </div>
              <div className="  text-xl mb-3 font-bold">2019-2021</div>
              <p className=" flex items-start gap-1 font-medium text-black dark:text-white  text-base">
                I have accomplished my high school education at Government
                Senior Secondary School, Jhajjar, Haryana, specializing in the
                Non-Medical Stream, during the academic session of 2019-2021.
              </p>
              <span className=" absolute top-0 left-0  flex justify-center align-middle items-center w-[27px] h-[27px]  sm:w-[30px] sm:h-[30px] bg-white dark:bg-black border-black dark:border-white border-[3px] -ml-[45px] sm:-ml-[81px] rounded-[50%]">
                <span className="w-[12px] h-[12px] sm:w-[15px] sm:h-[15px] bg-black dark:bg-white  rounded-[50%]"></span>
              </span>
            </div>
            <div className="relative ml-[30px] sm:ml-[65px] ">
              <div className="  font-bold text-[25px] sm:text-[30px] mb-3">
                Bachelor&apos;s Degree
              </div>
              <div className="  text-xl mb-3 font-bold">2021-Present</div>
              <p className=" flex items-start gap-1 font-medium text-black dark:text-white  text-base">
                I am currently enrolled in the Bachelor&apos;s program in
                Computer Science and Engineering at Ganga Institute of
                Technology and Management, located in Kablana, Jhajjar.
              </p>

              <span className=" absolute top-0 left-0  flex justify-center align-middle items-center  w-[27px] h-[27px]  sm:w-[30px] sm:h-[30px] bg-white dark:bg-black border-black dark:border-white  border-[3px] -ml-[45px] sm:-ml-[81px] rounded-[50%]">
                <span className="w-[12px] h-[12px] sm:w-[15px] sm:h-[15px] bg-black dark:bg-white  rounded-[50%]"></span>
              </span>
            </div>
          </div>
        </div>

        <div>
          <h1 className="items-center text-center font-bold text-5xl sm:text-[55px] lg:text-[65px] mt-24 mb-20 ">
            Experience
          </h1>
          {data &&
            data?.map((item, index) => (
              <div key={index} className="flex flex-col text-start ">
                <div className=" flex flex-col gap-16 border-l-[3px] border-black dark:border-white  ">
                  <div className="relative ml-[30px] sm:ml-[65px]  ">
                    {/* mb-16 */}
                    <div className="  font-bold text-[25px] sm:text-[30px] mb-2">
                      {item?.role}
                    </div>
                    {item?.company && (
                      <div className="  font-bold text-xl text-blue-700 mb-2">
                        @{item?.company}
                      </div>
                    )}
                    <div className="  text-xl mb-2 font-bold">
                      {item?.duration}
                    </div>
                    <p className="font-medium text-black dark:text-white">
                      {item?.description}
                    </p>
                    <span className=" absolute top-0 left-0  flex justify-center align-middle items-center  w-[27px] h-[27px]  sm:w-[30px] sm:h-[30px] bg-white dark:bg-black border-black dark:border-white  border-[3px] -ml-[45px] sm:-ml-[81px] rounded-[50%]">
                      <span className="w-[12px] h-[12px] sm:w-[15px] sm:h-[15px] bg-black  dark:bg-white  rounded-[50%]"></span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Info;
