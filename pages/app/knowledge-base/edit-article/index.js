import dynamic from "next/dynamic";
import React from "react";

const EditArticle = dynamic(
  () => import("views/knowledge-base/EditArticle/index"),
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
        <EditArticle />
      </ClassicLayout>
    </>
  );
};

export default Index;
