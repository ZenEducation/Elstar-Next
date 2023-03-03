import React from "react";

import dynamic from "next/dynamic";

const Progress = dynamic(
  () => import("views/ui-components/feedback/Progress/index"),
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
        <Progress />
      </Layout>
    </>
  );
};

export default Index;
