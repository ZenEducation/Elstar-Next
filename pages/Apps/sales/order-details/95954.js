import dynamic from "next/dynamic";
import React from "react";
const OrderDetails = dynamic(() => import("views/sales/OrderDetails/index"), {
  ssr: false,
});

import useLayout from "utils/hooks/useLayout";
const Index = () => {
  const Layout = useLayout();
  return (
    <>
      <Layout>
        <OrderDetails />
      </Layout>
    </>
  );
};

export default Index;
