import dynamic from "next/dynamic";
import React from "react";
const Portfolio = dynamic(() => import("views/crypto/Portfolio/index"), {
  ssr: false,
});

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});
const Index = () => {
  return (
    <>
      <ClassicLayout>
        <Portfolio />
      </ClassicLayout>
    </>
  );
};

export default Index;
