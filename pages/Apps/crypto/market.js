import dynamic from "next/dynamic";
import React from "react";
const Market = dynamic(() => import("components/Apps/crypto/Market/index"), {
  ssr: false,
});

import useLayout from "utils/hooks/useLayout";
const Index = () => {
  const Layout = useLayout();
  return (
    <>
      <Layout>
        <Market />
      </Layout>
    </>
  );
};

export default Index;
