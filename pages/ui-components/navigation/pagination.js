import React from "react";

import dynamic from "next/dynamic";

const Pagination = dynamic(
  () => import("views/ui-components/navigation/Pagination/index"),
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
        <Pagination />
      </Layout>
    </>
  );
};

export default Index;
