import React from "react";
import dynamic from "next/dynamic";

const CrmDashBoard = dynamic(() => import("views/crm/CrmDashboard/index"), {
  ssr: false,
});
const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});
const dashboard = () => {
  return (
    <>
      <ClassicLayout>
        <CrmDashBoard />
      </ClassicLayout>
    </>
  );
};

export default dashboard;
