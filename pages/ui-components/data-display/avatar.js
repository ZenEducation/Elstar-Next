import React from "react";

import dynamic from "next/dynamic";
const Avatar = dynamic(
  () => import("components/ui-components/data-display/Avatar/index"),
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
        <Avatar />
      </Layout>
    </>
  );
};

export default Index;
