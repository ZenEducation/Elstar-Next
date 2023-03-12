import dynamic from "next/dynamic";
import React from "react";
const Wallets = dynamic(() => import("components/Apps/crypto/Wallets/index"), {
  ssr: false,
});

import useLayout from "utils/hooks/useLayout";
const Index = () => {
  const Layout = useLayout();
  return (
    <>
      <Layout>
        <Wallets />
      </Layout>
    </>
  );
};

export default Index;
