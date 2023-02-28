import dynamic from "next/dynamic";
import React from "react";
// import DetailForm from "@/views/account/KycForm/index";
const DetailForm = dynamic(() => import("views/account/KycForm/index"), {
  ssr: false,
});

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});
const Index = () => {
  return (
    <>
      <ClassicLayout>
        <DetailForm />
      </ClassicLayout>
    </>
  );
};

export default Index;
