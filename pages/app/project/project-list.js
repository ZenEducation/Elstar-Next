import React from "react";

import dynamic from "next/dynamic";
// import ProjectList from "@/views/project/ProjectList/index";

const ProjectList = dynamic(() => import("views/project/ProjectList/index"), {
  ssr: false,
});
const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});
const dashboard = () => {
  return (
    <>
      <ClassicLayout>
        <ProjectList />
      </ClassicLayout>
    </>
  );
};

export default dashboard;
