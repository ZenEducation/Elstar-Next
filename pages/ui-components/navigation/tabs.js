import React from "react";

import dynamic from "next/dynamic";

const Tabs = dynamic(
  () => import("views/ui-components/navigation/Tabs/index"),
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
        <Tabs />
      </Layout>
    </>
  );
};

export default Index;
