import React from "react";
import dynamic from "next/dynamic";
// import Customers from "@/views/crm/Customers/index";
const Customers = dynamic(() => import("views/crm/Customers/index"), {
  ssr: false,
});
const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});
const dashboard = () => {
  return (
    <>
      <ClassicLayout>
        <Customers />
      </ClassicLayout>
    </>
  );
};

export default dashboard;
