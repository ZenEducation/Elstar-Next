import React from "react";
// import ProjectDashboard from "@/views/project/ProjectDashboard/index";
import dynamic from "next/dynamic";

const ProjectDashboard = dynamic(
  () => import("views/project/ProjectDashboard/index"),
  {
    ssr: false,
  }
);
const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});
const dashboard = () => {
  return (
    <>
      <ClassicLayout>
        <ProjectDashboard />
      </ClassicLayout>
    </>
  );
};

export default dashboard;
