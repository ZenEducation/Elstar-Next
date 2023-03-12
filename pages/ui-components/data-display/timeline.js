import React from "react";

import dynamic from "next/dynamic";
const Timeline = dynamic(
  () => import("components/ui-components/data-display/Timeline/index"),
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
        <Timeline />
      </Layout>
    </>
  );
};

export default Index;
