import React from "react";

import dynamic from "next/dynamic";

const Maps = dynamic(() => import("views/ui-components/graph/Maps/index"), {
  ssr: false,
});

import useLayout from "utils/hooks/useLayout";
const Index = () => {
  const Layout = useLayout();
  return (
    <>
      <Layout>
        <Maps />
      </Layout>
    </>
  );
};

export default Index;
