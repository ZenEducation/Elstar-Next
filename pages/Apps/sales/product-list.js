import dynamic from "next/dynamic";
import React from "react";

const ProductList = dynamic(() => import("components/Apps/sales/ProductList/index"), {
  ssr: false,
});

import useLayout from "utils/hooks/useLayout";
const Index = () => {
  const Layout = useLayout();
  return (
    <>
      <Layout>
        <ProductList />
      </Layout>
    </>
  );
};

export default Index;
