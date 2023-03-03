import React from "react";

import dynamic from "next/dynamic";

const Checkbox = dynamic(
  () => import("views/ui-components/forms/Checkbox/index"),
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
        <Checkbox />
      </Layout>
    </>
  );
};

export default Index;
