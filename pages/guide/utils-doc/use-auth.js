import React from "react";
import dynamic from "next/dynamic";

const UtilsDoc = dynamic(() => import("components/docs/UtilsDoc/index"), {
  ssr: false,
});
import useLayout from "utils/hooks/useLayout";
const Index = () => {
  const Layout = useLayout();
  return (
    <Layout>
      <UtilsDoc />
    </Layout>
  );
};

export default Index;
