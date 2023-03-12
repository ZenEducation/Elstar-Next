import React from "react";

import dynamic from "next/dynamic";

const FormControl = dynamic(
  () => import("components/ui-components/forms/FormControl/index"),
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
        <FormControl />
      </Layout>
    </>
  );
};

export default Index;
