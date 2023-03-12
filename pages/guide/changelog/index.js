import React from "react";
// import "../../../index.css";
import dynamic from "next/dynamic";

const ChangeLog = dynamic(() => import("components/docs/ChangeLog/index"), {
  ssr: false,
});
import useLayout from "utils/hooks/useLayout";
const Index = () => {
  const Layout = useLayout();
  return (
    <Layout>
      <ChangeLog />
    </Layout>
  );
};

export default Index;
