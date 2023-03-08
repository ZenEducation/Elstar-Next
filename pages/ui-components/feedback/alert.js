import React from "react";

import dynamic from "next/dynamic";

const Alert = dynamic(
  () => import("components/ui-components/feedback/Alert/index"),
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
        <Alert />
      </Layout>
    </>
  );
};

export default Index;
