import dynamic from "next/dynamic";
import React from "react";

const ProductNew = dynamic(() => import("views/sales/ProductNew/index"), {
  ssr: false,
});

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});
const Index = () => {
  return (
    <>
      <ClassicLayout>
        <ProductNew />
      </ClassicLayout>
    </>
  );
};

export default Index;
