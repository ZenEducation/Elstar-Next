import React from "react";
import dynamic from "next/dynamic";

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});
const UtilsDoc = dynamic(() => import("views/docs/UtilsDoc/index"), {
  ssr: false,
});
const Index = () => {
  return (
    <ClassicLayout>
      <UtilsDoc />
    </ClassicLayout>
  );
};

export default Index;
