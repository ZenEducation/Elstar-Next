import React from "react";

import dynamic from "next/dynamic";
const DatePicker = dynamic(
  () => import("views/ui-components/forms/DatePicker/index"),
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
        <DatePicker />
      </Layout>
    </>
  );
};

export default Index;
