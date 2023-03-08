import React from "react";
import dynamic from "next/dynamic";
// import CustomerDetail from "@/views/crm/CustomerDetail/index";
const CustomerDetail = dynamic(() => import("components/Apps/crm/CustomerDetail/index"), {
  ssr: false,
});
import useLayout from "utils/hooks/useLayout";
const dashboard = () => {
  const Layout = useLayout();
  return (
    <>
      <Layout>
        <CustomerDetail />
      </Layout>
    </>
  );
};

export default dashboard;
