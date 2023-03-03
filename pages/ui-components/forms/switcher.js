import React from "react";

import dynamic from "next/dynamic";

const Switcher = dynamic(
  () => import("views/ui-components/forms/Switcher/index"),
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
        <Switcher />
      </Layout>
    </>
  );
};

export default Index;
