import React from "react";

import dynamic from "next/dynamic";
const Toast = dynamic(
  () => import("views/ui-components/feedback/Toast/index"),
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
        <Toast />
      </Layout>
    </>
  );
};

export default Index;
