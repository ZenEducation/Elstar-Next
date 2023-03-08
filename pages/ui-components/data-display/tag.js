import React from "react";

import dynamic from "next/dynamic";

const Tag = dynamic(
  () => import("components/ui-components/data-display/Tag/index"),
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
        <Tag />
      </Layout>
    </>
  );
};

export default Index;
