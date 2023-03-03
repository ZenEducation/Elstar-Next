import React from "react";

import dynamic from "next/dynamic";

const Drawer = dynamic(
  () => import("views/ui-components/feedback/Drawer/index"),
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
        <Drawer />
      </Layout>
    </>
  );
};

export default Index;
