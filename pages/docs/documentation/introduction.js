import dynamic from "next/dynamic";
import React from "react";

const Documentations = dynamic(
  () => import("views/docs/Documentations/index"),
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
        <Documentations />
      </ClassicLayout>
    </>
  );
};

export default Index;
