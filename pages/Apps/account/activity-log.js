import dynamic from "next/dynamic";
import React from "react";

const ActivityLog = dynamic(() => import("views/account/ActivityLog/index"), {
  ssr: false,
});

import useLayout from "utils/hooks/useLayout";
const Index = () => {
  const Layout = useLayout();
  return (
    <>
      <Layout>
        <ActivityLog />
      </Layout>
    </>
  );
};

export default Index;
