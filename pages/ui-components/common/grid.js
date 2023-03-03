import React from "react";

import dynamic from "next/dynamic";

const Grid = dynamic(() => import("views/ui-components/common/Grid/index"), {
  ssr: false,
});

import useLayout from "utils/hooks/useLayout";
const Index = () => {
  const Layout = useLayout();
  return (
    <>
      <Layout>
        <Grid />
      </Layout>
    </>
  );
};

export default Index;
