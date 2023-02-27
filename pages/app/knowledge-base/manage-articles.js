import dynamic from "next/dynamic";
import React from "react";
// import ManageArticles from "@/views/knowledge-base/ManageArticles/index";
const ManageArticles = dynamic(
  () => import("views/knowledge-base/ManageArticles/index"),
  {
    ssr: false,
  }
);

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});
const Index = () => {
  return (
    <>
      <ClassicLayout>
        <ManageArticles />
      </ClassicLayout>
    </>
  );
};

export default Index;
