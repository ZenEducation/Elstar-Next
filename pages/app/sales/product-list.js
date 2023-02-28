import dynamic from "next/dynamic";
import React from "react";

const ProductList = dynamic(() => import("views/sales/ProductList/index"), {
  ssr: false,
});

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});
const Index = () => {
  return (
    <>
      <ClassicLayout>
        <ProductList />
      </ClassicLayout>
    </>
  );
};

export default Index;
