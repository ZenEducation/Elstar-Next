import React from "react";

import dynamic from "next/dynamic";
const Tooltip = dynamic(
  () => import("components/ui-components/data-display/Tooltip/index"),
  {
    ssr: false,
  }
);

import useLayout from "utils/hooks/useLayout";
const Index = () => {
  const Layout = useLayout();
  return (
    <>
      <Layout>
        <Tooltip />
      </Layout>
    </>
  );
};

export default Index;
