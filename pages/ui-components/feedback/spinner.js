import React from "react";

import dynamic from "next/dynamic";

const Spinner = dynamic(
  () => import("components/ui-components/feedback/Spinner/index"),
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
        <Spinner />
      </Layout>
    </>
  );
};

export default Index;
