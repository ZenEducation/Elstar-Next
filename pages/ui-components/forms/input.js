import React from "react";

import dynamic from "next/dynamic";
const Input = dynamic(() => import("views/ui-components/forms/Input/index"), {
  ssr: false,
});

import useLayout from "utils/hooks/useLayout";
const Index = () => {
  const Layout = useLayout();
  return (
    <>
      <Layout>
        <Input />
      </Layout>
    </>
  );
};

export default Index;
