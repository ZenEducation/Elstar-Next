import dynamic from "next/dynamic";
import React from "react";

const Settings = dynamic(() => import("components/Apps/Accounts/Settings/index"), {
  ssr: false,
});

import useLayout from "utils/hooks/useLayout";
const Index = () => {
  const Layout = useLayout();
  return (
    <>
      <Layout>
        <Settings />
      </Layout>
    </>
  );
};

export default Index;
