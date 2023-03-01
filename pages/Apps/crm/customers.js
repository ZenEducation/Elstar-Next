import React from "react";
import dynamic from "next/dynamic";
// import Customers from "@/views/crm/Customers/index";
const Customers = dynamic(() => import("views/crm/Customers/index"), {
  ssr: false,
});

import useLayout from "utils/hooks/useLayout";
const dashboard = () => {
  const Layout = useLayout();
  return (
    <>
      <Layout>
        <Customers />
      </Layout>
    </>
  );
};

export default dashboard;
