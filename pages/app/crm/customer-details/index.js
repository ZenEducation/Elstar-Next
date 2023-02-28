import React from "react";
import dynamic from "next/dynamic";
// import CustomerDetail from "@/views/crm/CustomerDetail/index";
const CustomerDetail = dynamic(() => import("views/crm/CustomerDetail/index"), {
  ssr: false,
});
const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});
const dashboard = () => {
  return (
    <>
      <ClassicLayout>
        <CustomerDetail />
      </ClassicLayout>
    </>
  );
};

export default dashboard;
