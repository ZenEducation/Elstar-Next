import React from "react";

import dynamic from "next/dynamic";
const Upload = dynamic(() => import("views/ui-components/forms/Upload/index"), {
  ssr: false,
});

import useLayout from "utils/hooks/useLayout";
const Index = () => {
  const Layout = useLayout();
  return (
    <>
      <Layout>
        <Upload />
      </Layout>
    </>
  );
};

export default Index;
