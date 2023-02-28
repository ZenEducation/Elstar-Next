import dynamic from "next/dynamic";
import React from "react";

const Settings = dynamic(() => import("views/account/Settings/index"), {
  ssr: false,
});
const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <Settings />
      </ClassicLayout>
    </>
  );
};

export default Index;
