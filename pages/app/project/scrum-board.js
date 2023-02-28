import React from "react";
import dynamic from "next/dynamic";
// import ScrumBoard from "@/views/project/ScrumBoard/index";
const ScrumBoard = dynamic(() => import("views/project/ScrumBoard/index"), {
  ssr: false,
});
const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});
const dashboard = () => {
  return (
    <>
      <ClassicLayout>
        <ScrumBoard />
      </ClassicLayout>
    </>
  );
};

export default dashboard;
