import dynamic from "next/dynamic";
import React from "react";
const Portfolio = dynamic(() => import("components/Apps/crypto/Portfolio/index"), {
  ssr: false,
});

import useLayout from "utils/hooks/useLayout";
const Index = () => {
  const Layout = useLayout();
  return (
    <>
      <Layout>
        <Portfolio />
      </Layout>
    </>
  );
};

export default Index;
