import dynamic from "next/dynamic";
import React from "react";

const Article = dynamic(() => import("components/Apps/knowledge-base/article/index"), {
  ssr: false,
});

import useLayout from "utils/hooks/useLayout";
const Index = () => {
  const Layout = useLayout();
  return (
    <>
      <Layout>
        <Article />
      </Layout>
    </>
  );
};

export default Index;
