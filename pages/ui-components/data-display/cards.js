import React from "react";

import dynamic from "next/dynamic";

const Cards = dynamic(
  () => import("components/ui-components/data-display/Cards/index"),
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
        <Cards />
      </Layout>
    </>
  );
};

export default Index;
