import React from "react";

import dynamic from "next/dynamic";
const Radio = dynamic(() => import("views/ui-components/forms/Radio/index"), {
  ssr: false,
});

import useLayout from "utils/hooks/useLayout";
const Index = () => {
  const Layout = useLayout();
  return (
    <>
      <Layout>
        <Radio />
      </Layout>
    </>
  );
};

export default Index;
