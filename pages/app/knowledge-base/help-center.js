import dynamic from "next/dynamic";
import React from "react";
const HelpCenter = dynamic(
  () => import("views/knowledge-base/HelpCenter/index"),
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
        <HelpCenter />
      </ClassicLayout>
    </>
  );
};

export default Index;
