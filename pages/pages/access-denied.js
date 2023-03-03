import React from "react";

import dynamic from "next/dynamic";
const AccessDenied = dynamic(() => import("views/pages/AccessDenied/index"), {
  ssr: false,
});

import useLayout from "utils/hooks/useLayout";
const Index = () => {
  const Layout = useLayout();
  return (
    <>
      <Layout>
        <AccessDenied />
      </Layout>
    </>
  );
};

export default Index;
