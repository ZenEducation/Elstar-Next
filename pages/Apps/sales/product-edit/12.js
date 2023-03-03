import dynamic from "next/dynamic";
import React from "react";

const ProductEdit = dynamic(() => import("views/sales/ProductEdit/index"), {
  ssr: false,
});

import useLayout from "utils/hooks/useLayout";
const Index = () => {
  const Layout = useLayout();
  return (
    <>
      <Layout>
        <ProductEdit />
      </Layout>
    </>
  );
};

export default Index;
