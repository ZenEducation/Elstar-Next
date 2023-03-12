import React from "react";

import dynamic from "next/dynamic";

const Dialog = dynamic(
  () => import("components/ui-components/feedback/Dialog/index"),
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
        <Dialog />
      </Layout>
    </>
  );
};

export default Index;
