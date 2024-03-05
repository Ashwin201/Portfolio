import ProjectDetail from "@/components/ProjectDetail";
import React from "react";
import { FaTwitter } from "react-icons/fa";

export async function generateMetadata({ params }) {
  const data = await getData(params.id);
  return {
    title: data?.title,
    description: "Showcasing code, design and projects.",
  };
}

const getData = async (id) => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/project/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {}
};
const ProjectDetailPage = async ({ params }) => {
  const id = params.id;
  const data = await getData(id);
  return (
    <>
      {data && data?._id === id ? (
        <ProjectDetail data={data} />
      ) : (
        <div className="flex flex-col items-center space-y-4">
          <div className="flex flex-col gap-3 items-center space-x-4">
            <FaTwitter size={50} />
            <h1 className="text-2xl font-bold">Project not found</h1>
          </div>
          <p className="text-base text-center font-semibold">
            It looks like the project you&apos;re looking for doesn&apos;t
            exist. Please verify the ID and try again.
          </p>
        </div>
      )}
    </>
  );
};

export default ProjectDetailPage;
