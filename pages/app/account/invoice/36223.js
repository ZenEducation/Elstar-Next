import dynamic from "next/dynamic";
import React from "react";
// import Invoice from "@/views/account/Invoice/index";
const Invoice = dynamic(() => import("views/account/Invoice/index"), {
  ssr: false,
});
const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <Invoice />
      </ClassicLayout>
    </>
  );
};

export default Index;
