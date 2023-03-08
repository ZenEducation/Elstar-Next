import React from "react";

import dynamic from "next/dynamic";
const TimeInput = dynamic(
  () => import("components/ui-components/forms/TimeInput/index"),
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
        <TimeInput />
      </Layout>
    </>
  );
};

export default Index;
