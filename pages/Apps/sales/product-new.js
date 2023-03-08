import dynamic from "next/dynamic";
import React from "react";

const ProductNew = dynamic(() => import("components/Apps/sales/ProductNew/index"), {
  ssr: false,
});

import useLayout from "utils/hooks/useLayout";
const Index = () => {
  const Layout = useLayout();
  return (
    <>
      <Layout>
        <ProductNew />
      </Layout>
    </>
  );
};

export default Index;
