import React from "react";

import dynamic from "next/dynamic";

const Skeleton = dynamic(
  () => import("views/ui-components/feedback/Skeleton/index"),
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
        <Skeleton />
      </Layout>
    </>
  );
};

export default Index;
