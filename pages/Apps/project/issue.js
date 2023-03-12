import dynamic from "next/dynamic";
// import Issue from "@/views/project/Issue";
import React from "react";
const Issue = dynamic(() => import("components/Apps/project/Issue/index"), {
  ssr: false,
});
import useLayout from "utils/hooks/useLayout";
const dashboard = () => {
  const Layout = useLayout();
  return (
    <>
      <Layout>
        <Issue />
      </Layout>
    </>
  );
};

export default dashboard;
