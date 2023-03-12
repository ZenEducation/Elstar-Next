import dynamic from "next/dynamic";
import React from "react";
// import ShareComponentsDocView from "@/components/docs/SharedComponentsDoc/index";
const SharedComponentsDoc = dynamic(
  () => import("components/docs/SharedComponentsDoc/index"),
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
        <SharedComponentsDoc />
      </Layout>
    </>
  );
};

export default Index;
