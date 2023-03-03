import React from "react";

import dynamic from "next/dynamic";

const Select = dynamic(() => import("views/ui-components/forms/Select/index"), {
  ssr: false,
});

import useLayout from "utils/hooks/useLayout";
const Index = () => {
  const Layout = useLayout();
  return (
    <>
      <Layout>
        <Select />
      </Layout>
    </>
  );
};

export default Index;
