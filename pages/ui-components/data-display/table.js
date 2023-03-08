import React from "react";

import dynamic from "next/dynamic";
const Table = dynamic(
  () => import("components/ui-components/data-display/Table/index"),
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
        <Table />
      </Layout>
    </>
  );
};

export default Index;
