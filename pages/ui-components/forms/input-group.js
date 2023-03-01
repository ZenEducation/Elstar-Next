import React from "react";

import dynamic from "next/dynamic";

const InputGroup = dynamic(
  () => import("views/ui-components/forms/InputGroup/index"),
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
        <InputGroup />
      </Layout>
    </>
  );
};

export default Index;
