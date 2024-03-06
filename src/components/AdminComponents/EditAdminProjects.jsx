"use client";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BiImageAdd, BiSolidShow } from "react-icons/bi";
import { CldUploadButton } from "next-cloudinary";
import { TiDelete } from "react-icons/ti";
import { MdOutlineLibraryAdd, MdPublish } from "react-icons/md";
import { RiDeleteBinFill } from "react-icons/ri";
import { useRouter } from "next/navigation";
const EditAdminProjects = ({ data, id }) => {
  const [showForm, setShowForm] = useState(false);
  const [projectNumber, setProjectNumber] = useState();
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [publicIds, setPublicIds] = useState([]);
  const [techInput, setTechInput] = useState("");
  const [technologies, setTechnologies] = useState([]);
  const [featureInput, setFeatureInput] = useState("");
  const [features, setFeatures] = useState([]);
  const [github, setGithub] = useState("");
  const [live, setLive] = useState("");
  const router = useRouter();
  //Function to store Features
  const handleTechnology = (e) => {
    e.preventDefault();
    setTechnologies((prev) => {
      if (Array.isArray(prev)) {
        return [...prev, techInput];
      } else {
        // If prev is not an array, handle it appropriately (e.g., set it to an empty array)
        return [techInput];
      }
    });
    setTechInput("");
  };

  //Function to delete Features
  const handleDeleteTechnology = (index) => {
    setTechnologies((prev) => prev.filter((_, i) => i !== index));
  };
  //Function to store Features
  const handleFeatures = (e) => {
    e.preventDefault();
    setFeatures((prev) => {
      if (Array.isArray(prev)) {
        return [...prev, featureInput];
      } else {
        // If prev is not an array, handle it appropriately (e.g., set it to an empty array)
        return [featureInput];
      }
    });
    setFeatureInput("");
  };

  //Function to delete Features
  const handleDeleteFeatures = (index) => {
    setFeatures((prev) => prev.filter((_, i) => i !== index));
  };

  //Handle Image upload
  const handleImageUpload = (result) => {
    console.log(result);
    const info = result.info;
    if ("secure_url" in info && "public_id" in info) {
      const url = info.secure_url;
      const public_id = info.public_id;
      setImages((prevImages) => [...prevImages, url]);
      setPublicIds((prevPublicIds) => [...prevPublicIds, public_id]);
    } else {
      // Handle the case when the image limit is reached (display a message, etc.)
      console.log("Image upload fail");
    }
  };

  //For delete image
  const handleRemoveImage = async (index) => {
    try {
      const res = await fetch(`/api/removeImage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ publicId: publicIds[index] }),
      });

      if (res.ok) {
        const updatedImageUrls = [...images];
        const updatedPublicIds = [...publicIds];

        updatedImageUrls.splice(index, 1);
        updatedPublicIds.splice(index, 1);

        setImages(updatedImageUrls);
        setPublicIds(updatedPublicIds);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //To get data
  useEffect(() => {
    const inItValues = () => {
      try {
        setProjectNumber(data?.projectNumber);
        setTitle(data?.title);
        setDescription(data?.description);
        setCategory(data?.category);
        setImages(data?.image);
        setTechnologies(data?.technology);
        setFeatures(data?.feature);
        setGithub(data?.github);
        setLive(data?.live);
      } catch (error) {
        console.log(error);
      }
    };
    inItValues();
  }, [data]);

  // Handling the post functionality
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !category) {
      toast.error("Above fields are required.");
      return;
    }

    try {
      const res = await fetch(`/api/project/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          projectNumber,
          title,
          description,
          category,
          image: images,
          technology: technologies,
          feature: features,
          github,
          live,
        }),
      });

      if (res.ok) {
        toast.success("Project has been updated successfully.");
        router.push("/admin/edit-projects");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <section className=" my-16">
      <>
        <div className="mb-8  flex items-center flex-col">
          <h1 className=" font-bold flex flex-col gap-3   text-3xl sm:text-5xl text-center mb-4  ">
            Edit Your Project!
          </h1>
        </div>
        <form className=" flex gap-5 flex-col " onSubmit={handleSubmit}>
          <div className=" w-full">
            <label
              htmlFor="sno"
              className="block text-lg mb-1 ml-1 font-semibold text-gray-900 dark:text-gray-300"
            >
              Serial number of your project
            </label>

            <input
              type="number"
              id="sno"
              onChange={(e) => setProjectNumber(e.target.value)}
              value={projectNumber}
              placeholder="Project number"
              className="mt-1 w-full rounded-md border-2 p-3 bg-[#f8f9fa] dark:bg-gray-950  font-medium border-gray-400 dark:border-gray-600  dark:focus-within:border-gray-300 focus-within:border-gray-900 shadow-sm sm:text-sm"
            />
          </div>
          <div className=" w-full">
            <label
              htmlFor="category"
              className="block text-lg mb-1 ml-1 font-semibold text-gray-900 dark:text-gray-300"
            >
              Category of your project
            </label>

            <input
              type="text"
              id="category"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              placeholder="eg: NextJs / MERN"
              className="mt-1 w-full rounded-md border-2 p-3 bg-[#f8f9fa] dark:bg-gray-950  font-medium border-gray-400 dark:border-gray-600  dark:focus-within:border-gray-300 focus-within:border-gray-900 shadow-sm sm:text-sm"
            />
          </div>
          <div className=" w-full">
            <label
              htmlFor="name"
              className="block text-lg mb-1 ml-1 font-semibold text-gray-900 dark:text-gray-300"
            >
              Name of your project
            </label>

            <input
              type="text"
              id="name"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              placeholder="Your project name"
              className="mt-1 w-full rounded-md border-2 p-3 bg-[#f8f9fa] dark:bg-gray-950  font-medium border-gray-400 dark:border-gray-600  dark:focus-within:border-gray-300 focus-within:border-gray-900 shadow-sm sm:text-sm"
            />
          </div>
          <div className=" w-full">
            <label
              htmlFor="name"
              className="block text-lg mb-1 ml-1 font-semibold text-gray-900 dark:text-gray-300"
            >
              Description of your project
            </label>

            <input
              type="text"
              id="name"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              placeholder="Your project description"
              className="mt-1 w-full rounded-md border-2 p-3 bg-[#f8f9fa] dark:bg-gray-950  font-medium border-gray-400 dark:border-gray-600  dark:focus-within:border-gray-300 focus-within:border-gray-900 shadow-sm sm:text-sm"
            />
          </div>
          <div className=" w-full ">
            <h6 className=" block text-lg mb-1 ml-1  font-semibold text-gray-900 dark:text-gray-300 ">
              Add some photos of your product!
            </h6>

            <div
              className={`${
                images.length > 0
                  ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5"
                  : " flex"
              }     rounded-md gap-5  mr-1 mt-2 sm:mr-0`}
            >
              {images.length > 0 &&
                images &&
                images?.map((image, index) => (
                  <div
                    key={index}
                    className="  col-span-1 rounded-md border-1 border-gray-200 dark:border-gray-800 "
                  >
                    <div className="relative border-2 rounded-md">
                      <img
                        src={image}
                        alt="Image"
                        width={100}
                        height={100}
                        className=" cursor-pointer h-32 w-full  object-cover object-center"
                      />
                      <span
                        className=" cursor-pointer absolute bg-white text-black p-[1px] rounded-full -top-2 -right-2"
                        onClick={() => handleRemoveImage(index)}
                      >
                        <TiDelete size={18} />
                      </span>
                    </div>
                  </div>
                ))}
              <div
                className={`${
                  images.length < 1 ? " w-[100%] " : "col-span-1"
                }    flex  justify-center items-center rounded-md border-2 p-3 bg-[#f8f9fa] dark:bg-gray-950   border-gray-400 dark:border-gray-600  dark:focus-within:border-gray-300 focus-within:border-gray-900 shadow-sm:border-gray-800 shadow-sm focus-within:border-2`}
              >
                <CldUploadButton
                  uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET}
                  onUpload={handleImageUpload}
                  className={`${
                    images.length < 1 ? "  py-20" : "py-[28px]"
                  } flex flex-col gap-1 items-center`}
                >
                  <BiImageAdd size={30} />
                  <h3 className="   text-sm font-medium text-gray-700 dark:text-gray-300 ">
                    Upload Image
                  </h3>
                </CldUploadButton>
              </div>
            </div>
          </div>
          <div className=" w-full">
            <label
              htmlFor="technology"
              className="block text-lg mb-1 ml-1 font-semibold text-gray-900 dark:text-gray-300"
            >
              Technologies used in your project
            </label>

            <input
              type="text"
              onChange={(e) => setTechInput(e.target.value)}
              value={techInput}
              id="technology"
              placeholder="Add some technologies used in project"
              className=" resize-none mt-1 w-full rounded-md border-2 p-3 bg-[#f8f9fa] dark:bg-gray-950  font-medium border-gray-400 dark:border-gray-600  dark:focus-within:border-gray-300 focus-within:border-gray-900 shadow-sm sm:text-sm"
            />
            {techInput.length > 0 && (
              <button
                className="py-2 px-3 bg-gray-950 rounded-md border-2 dark:border-gray-300  text-gray-300 dark:bg-gray-200 dark:text-black text-sm font-medium flex gap-2 mt-1"
                onClick={handleTechnology}
              >
                <MdOutlineLibraryAdd size={20} />
                Add Technology
              </button>
            )}

            <div className=" mt-1 flex flex-col gap-1">
              {technologies &&
                technologies?.map((item, index) => (
                  <div className=" flex gap-2" key={index}>
                    <p className=" line-clamp-2 text-sm font-medium">{item} </p>
                    <span
                      className=" cursor-pointer text-red-700"
                      onClick={() => handleDeleteTechnology(index)}
                    >
                      <RiDeleteBinFill size={19} />
                    </span>
                  </div>
                ))}
            </div>
          </div>
          <div className=" w-full">
            <label
              htmlFor="feature"
              className="block text-lg mb-1 ml-1 font-semibold text-gray-900 dark:text-gray-300"
            >
              Features of your project
            </label>

            <input
              type="text"
              onChange={(e) => setFeatureInput(e.target.value)}
              value={featureInput}
              id="feature"
              placeholder="Add some features of project"
              className=" resize-none mt-1 w-full rounded-md border-2 p-3 bg-[#f8f9fa] dark:bg-gray-950  font-medium border-gray-400 dark:border-gray-600  dark:focus-within:border-gray-300 focus-within:border-gray-900 shadow-sm sm:text-sm"
            />
            {featureInput.length > 0 && (
              <button
                className="py-2 px-3 bg-gray-950 rounded-md border-2 dark:border-gray-300  text-gray-300 dark:bg-gray-200 dark:text-black text-sm font-medium flex gap-2 mt-1"
                onClick={handleFeatures}
              >
                <MdOutlineLibraryAdd size={20} />
                Add Feature
              </button>
            )}

            <div className=" mt-1 flex flex-col gap-1">
              {features &&
                features?.map((item, index) => (
                  <div className=" flex gap-2" key={index}>
                    <p className=" line-clamp-2 text-sm font-medium">{item} </p>
                    <span
                      className=" cursor-pointer text-red-700"
                      onClick={() => handleDeleteFeatures(index)}
                    >
                      <RiDeleteBinFill size={19} />
                    </span>
                  </div>
                ))}
            </div>
          </div>
          <div className=" w-full">
            <label
              htmlFor="link"
              className="block text-lg mb-1 ml-1 font-semibold text-gray-900 dark:text-gray-300"
            >
              Url of your github repository
            </label>

            <input
              type="text"
              id="link"
              onChange={(e) => setGithub(e.target.value)}
              value={github}
              placeholder="Github repository url"
              className="mt-1 w-full rounded-md border-2 p-3 bg-[#f8f9fa] dark:bg-gray-950  font-medium border-gray-400 dark:border-gray-600  dark:focus-within:border-gray-300 focus-within:border-gray-900 shadow-sm sm:text-sm"
            />
          </div>
          <div className=" w-full">
            <label
              htmlFor="link"
              className="block text-lg mb-1 ml-1 font-semibold text-gray-900 dark:text-gray-300"
            >
              Url of your live website
            </label>

            <input
              type="text"
              id="link"
              onChange={(e) => setLive(e.target.value)}
              value={live}
              placeholder="Live website url"
              className="mt-1 w-full rounded-md border-2 p-3 bg-[#f8f9fa] dark:bg-gray-950  font-medium border-gray-400 dark:border-gray-600  dark:focus-within:border-gray-300 focus-within:border-gray-900 shadow-sm sm:text-sm"
            />
          </div>
          <button
            className="py-2 px-4 w-fit bg-gray-950 rounded-md border-2 dark:border-gray-300  text-gray-300 dark:bg-gray-200 dark:text-black text-sm font-semibold flex gap-2 
           duration-300 shadow-sm "
          >
            <MdPublish size={20} />
            Update
          </button>
        </form>
      </>
    </section>
  );
};

export default EditAdminProjects;
