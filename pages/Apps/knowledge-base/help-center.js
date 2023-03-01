import dynamic from "next/dynamic";
import React from "react";
const HelpCenter = dynamic(
  () => import("views/knowledge-base/HelpCenter/index"),
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
        <HelpCenter />
      </Layout>
    </>
  );
};

export default Index;
