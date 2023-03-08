import React from "react";

import dynamic from "next/dynamic";
const TypoGraphy = dynamic(
  () => import("components/ui-components/common/Typography/index"),
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
        <TypoGraphy />
      </Layout>
    </>
  );
};

export default Index;
