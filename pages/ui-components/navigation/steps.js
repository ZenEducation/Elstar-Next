import React from "react";

import dynamic from "next/dynamic";
const Steps = dynamic(
  () => import("views/ui-components/navigation/Steps/index"),
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
        <Steps />
      </Layout>
    </>
  );
};

export default Index;
