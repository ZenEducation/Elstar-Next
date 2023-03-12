import React from "react";
import dynamic from "next/dynamic";
// import ScrumBoard from "@/views/project/ScrumBoard/index";
const ScrumBoard = dynamic(() => import("components/Apps/project/ScrumBoard/index"), {
  ssr: false,
});
import useLayout from "utils/hooks/useLayout";
const dashboard = () => {
  const Layout = useLayout();
  return (
    <>
      <Layout>
        <ScrumBoard />
      </Layout>
    </>
  );
};

export default dashboard;
