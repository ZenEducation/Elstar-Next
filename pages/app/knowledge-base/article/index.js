import dynamic from "next/dynamic";
import React from "react";

const Article = dynamic(() => import("views/knowledge-base/Article/index"), {
  ssr: false,
});

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});
const Index = () => {
  return (
    <>
      <ClassicLayout>
        <Article />
      </ClassicLayout>
    </>
  );
};

export default Index;
