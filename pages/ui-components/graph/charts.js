import React from "react";

import dynamic from "next/dynamic";

const Charts = dynamic(() => import("components/ui-components/graph/Charts/index"), {
  ssr: false,
});

import useLayout from "utils/hooks/useLayout";
const Index = () => {
  const Layout = useLayout();
  return (
    <>
      <Layout>
        <Charts />
      </Layout>
    </>
  );
};

export default Index;
