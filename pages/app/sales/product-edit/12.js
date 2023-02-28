import dynamic from "next/dynamic";
import React from "react";

const ProductEdit = dynamic(() => import("views/sales/ProductEdit/index"), {
  ssr: false,
});

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});
const Index = () => {
  return (
    <>
      <ClassicLayout>
        <ProductEdit />
      </ClassicLayout>
    </>
  );
};

export default Index;
