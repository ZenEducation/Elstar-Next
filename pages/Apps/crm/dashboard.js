import React from "react";
import dynamic from "next/dynamic";

const CrmDashBoard = dynamic(() => import("views/crm/CrmDashboard/index"), {
  ssr: false,
});
import useLayout from "utils/hooks/useLayout";
const dashboard = () => {
  const Layout = useLayout();
  return (
    <>
      <Layout>
        <CrmDashBoard />
      </Layout>
    </>
  );
};

export default dashboard;
