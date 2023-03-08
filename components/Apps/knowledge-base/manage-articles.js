import dynamic from "next/dynamic";
import React from "react";
// import ManageArticles from "@/views/knowledge-base/ManageArticles/index";
const ManageArticles = dynamic(
  () => import("components/Apps/knowledge-base/manage-articles"),
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
        <ManageArticles />
      </Layout>
    </>
  );
};

export default Index;
