import React from "react";

import dynamic from "next/dynamic";

const Menu = dynamic(
  () => import("views/ui-components/navigation/Menu/index"),
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
        <Menu />
      </Layout>
    </>
  );
};

export default Index;
