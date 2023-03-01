import dynamic from "next/dynamic";
import React from "react";

const EditArticle = dynamic(
  () => import("views/knowledge-base/EditArticle/index"),
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
        <EditArticle />
      </Layout>
    </>
  );
};

export default Index;
