import dynamic from "next/dynamic";
import React from "react";

const OrderList = dynamic(() => import("components/Apps/sales/OrderList/index"), {
  ssr: false,
});

import useLayout from "utils/hooks/useLayout";
const Index = () => {
  const Layout = useLayout();
  return (
    <>
      <Layout>
        <OrderList />
      </Layout>
    </>
  );
};

export default Index;
