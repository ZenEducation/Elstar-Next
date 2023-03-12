import dynamic from "next/dynamic";
import React from "react";
const Invoice = dynamic(() => import("components/Apps/Accounts/Invoice/index"), {
  ssr: false,
});

import useLayout from "@/utils/hooks/useLayout";
const Index = () => {
  const Layout = useLayout();

  return (
    <>
      <Layout>
        <Invoice />
      </Layout>
    </>
  );
};

export default Index;
