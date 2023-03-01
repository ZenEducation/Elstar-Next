import React from "react";

import dynamic from "next/dynamic";
// import ProjectList from "@/views/project/ProjectList/index";

const ProjectList = dynamic(() => import("views/project/ProjectList/index"), {
  ssr: false,
});
import useLayout from "utils/hooks/useLayout";
const dashboard = () => {
  const Layout = useLayout();
  return (
    <>
      <Layout>
        <ProjectList />
      </Layout>
    </>
  );
};

export default dashboard;
