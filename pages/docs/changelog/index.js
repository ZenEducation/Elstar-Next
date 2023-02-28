import React from "react";
// import "../../../index.css";
import dynamic from "next/dynamic";

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});

const ChangeLog = dynamic(() => import("views/docs/ChangeLog/index"), {
  ssr: false,
});
const Index = () => {
  return (
    <ClassicLayout>
      <ChangeLog />
    </ClassicLayout>
  );
};

export default Index;
