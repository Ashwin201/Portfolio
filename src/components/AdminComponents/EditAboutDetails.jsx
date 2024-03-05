"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { MdOutlineLibraryAdd, MdPublish } from "react-icons/md";
import { RiDeleteBinFill } from "react-icons/ri";
import toast from "react-hot-toast";
const EditAboutDetails = ({ data, id }) => {
  const [descriptions, setDescriptions] = useState([]); //Array to store multiple element of decsription field
  const [descInput, setDescInput] = useState("");

  const [role, setRole] = useState("");
  const [title, setTitle] = useState("");
  const [shortDesc, setShortdesc] = useState("");
  const [resumeLink, setResumeLink] = useState("");
  const router = useRouter();
  //Function to store descriptions

  const handleDescription = (e) => {
    e.preventDefault();
    if (descInput.trim() !== "") {
      setDescriptions((prev) => {
        if (Array.isArray(prev)) {
          return [...prev, descInput];
        } else {
          // If prev is not an array, handle it appropriately (e.g., set it to an empty array)
          return [descInput];
        }
      });
      setDescInput("");
    }
  };

  //Function to delete descriptions
  const handleDeleteDescription = (index) => {
    setDescriptions((prev) => prev.filter((_, i) => i !== index));
  };

  //To get data
  useEffect(() => {
    const inItValues = () => {
      try {
        setRole(data.role || ""); // Use default value if data.role is undefined
        setTitle(data.title || "");
        setShortdesc(data.shortDesc || "");
        setDescriptions(data.description || "");
        setResumeLink(data.resume || "");
      } catch (error) {
        console.log(error);
      }
    };
    inItValues();
  }, [
    data?.role,
    data?.title,
    data?.descriptions,
    data?.shortDesc,
    data?.resume,
  ]);
  // Handling the post functionality
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !descriptions || !shortDesc || !role) {
      toast.error("Above fields are required.");
      return;
    }

    try {
      const res = await fetch(`/api/about/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          role,
          title,
          shortDesc,
          description: descriptions,
          resume: resumeLink,
        }),
      });

      if (res.ok) {
        toast.success("About details has been updated successfully.");
        router.push("/admin/edit-about-details");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <section className=" my-16">
      <div>
        <h1 className=" font-bold   text-3xl sm:text-5xl text-center  mb-8  ">
          Edit Your Details!
        </h1>
      </div>
      <form className=" flex gap-5 flex-col " onSubmit={handleSubmit}>
        <div className=" w-full">
          <label
            htmlFor="role"
            className="block text-lg mb-1 ml-1 font-semibold text-gray-900 dark:text-gray-300"
          >
            Your Role
          </label>

          <input
            type="text"
            id="role"
            onChange={(e) => setRole(e.target.value)}
            value={role}
            placeholder="Your current role"
            className="mt-1 w-full rounded-md border-2 p-3 bg-[#f8f9fa] dark:bg-gray-950  font-medium border-gray-400 dark:border-gray-600  dark:focus-within:border-gray-300 focus-within:border-gray-900 shadow-sm sm:text-sm"
          />
        </div>
        <div className=" w-full">
          <label
            htmlFor="title"
            className="block text-lg mb-1 ml-1 font-semibold text-gray-900 dark:text-gray-300"
          >
            Title of your landing page
          </label>

          <input
            type="text"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Langing page title"
            className="mt-1 w-full rounded-md border-2 p-3 bg-[#f8f9fa] dark:bg-gray-950  font-medium border-gray-400 dark:border-gray-600  dark:focus-within:border-gray-300 focus-within:border-gray-900 shadow-sm sm:text-sm"
          />
        </div>
        <div className=" w-full">
          <label
            htmlFor="shortdesc"
            className="block text-lg mb-1 ml-1 font-semibold text-gray-900 dark:text-gray-300"
          >
            Short description of your landing page
          </label>

          <textarea
            type="text"
            id="shortdesc"
            rows={2}
            onChange={(e) => setShortdesc(e.target.value)}
            value={shortDesc}
            placeholder="Short Description"
            className=" resize-none mt-1 w-full rounded-md border-2 p-3 bg-[#f8f9fa] dark:bg-gray-950  font-medium border-gray-400 dark:border-gray-600  dark:focus-within:border-gray-300 focus-within:border-gray-900 shadow-sm sm:text-sm"
          />
        </div>

        <div className=" w-full">
          <label
            htmlFor="description"
            className="block text-lg mb-1 ml-1 font-semibold text-gray-900 dark:text-gray-300"
          >
            Brief Description about you
          </label>

          <textarea
            type="text"
            rows={4}
            onChange={(e) => setDescInput(e.target.value)}
            value={descInput}
            id="description"
            placeholder="Detailed description"
            className=" resize-none mt-1 w-full rounded-md border-2 p-3 bg-[#f8f9fa] dark:bg-gray-950  font-medium border-gray-400 dark:border-gray-600  dark:focus-within:border-gray-300 focus-within:border-gray-900 shadow-sm sm:text-sm"
          />
          {descInput.length > 0 && (
            <button
              className="py-2 px-3 bg-gray-950 rounded-md border-2 dark:border-gray-300  text-gray-300 dark:bg-gray-200 dark:text-black text-sm font-medium flex gap-2"
              onClick={handleDescription}
            >
              <MdOutlineLibraryAdd size={20} />
              Add Description
            </button>
          )}

          <div className=" mt-1 flex flex-col gap-1">
            {descriptions &&
              descriptions?.map((item, index) => (
                <div className=" flex gap-2" key={index}>
                  <p className=" line-clamp-2 text-sm font-medium">{item} </p>
                  <span
                    className=" cursor-pointer text-red-700"
                    onClick={() => handleDeleteDescription(index)}
                  >
                    <RiDeleteBinFill size={22} />
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
            Enter url of your resume
          </label>

          <input
            type="text"
            id="link"
            onChange={(e) => setResumeLink(e.target.value)}
            value={resumeLink}
            placeholder="Resume url"
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
    </section>
  );
};

export default EditAboutDetails;
