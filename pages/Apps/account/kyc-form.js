import dynamic from "next/dynamic";
import React from "react";
// import DetailForm from "@/views/account/KycForm/index";
const DetailForm = dynamic(() => import("views/account/KycForm/index"), {
  ssr: false,
});

import useLayout from "utils/hooks/useLayout";
const Index = () => {
  const Layout = useLayout();
  return (
    <>
      <Layout>
        <DetailForm />
      </Layout>
    </>
  );
};

export default Index;
