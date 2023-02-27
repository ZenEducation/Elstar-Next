import dynamic from "next/dynamic";
import React from "react";
const Market = dynamic(() => import("views/crypto/Market/index"), {
  ssr: false,
});

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});
const Index = () => {
  return (
    <>
      <ClassicLayout>
        <Market />
      </ClassicLayout>
    </>
  );
};

export default Index;
