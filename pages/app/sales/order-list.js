import dynamic from "next/dynamic";
import React from "react";

const OrderList = dynamic(() => import("views/sales/OrderList/index"), {
  ssr: false,
});

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});
const Index = () => {
  return (
    <>
      <ClassicLayout>
        <OrderList />
      </ClassicLayout>
    </>
  );
};

export default Index;
