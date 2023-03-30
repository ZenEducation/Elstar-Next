import React from "react";
import dynamic from "next/dynamic";

const ProjectDashboard = dynamic(
  () => import("components/Apps/project/ProjectDashboard/index"),
  {
    ssr: false,
  }
);
import useLayout from "utils/hooks/useLayout";
const dashboard = () => {
  const Layout = useLayout();
  return (
    <>
      <Layout>
        <ProjectDashboard />
      </Layout>
    </>
  );
};

export default dashboard;
