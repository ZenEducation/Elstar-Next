import dynamic from "next/dynamic";
// import Issue from "@/views/project/Issue";
import React from "react";
const Issue = dynamic(() => import("views/project/Issue/index"), {
  ssr: false,
});
const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});
const dashboard = () => {
  return (
    <>
      <ClassicLayout>
        <Issue />
      </ClassicLayout>
    </>
  );
};

export default dashboard;
