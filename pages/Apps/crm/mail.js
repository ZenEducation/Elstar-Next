import React from "react";
import dynamic from "next/dynamic";
// import Mail from "@/views/crm/Mail/index";
const Mail = dynamic(() => import("components/Apps/crm/Mail/index"), {
  ssr: false,
});
import useLayout from "utils/hooks/useLayout";
const dashboard = () => {
  const Layout = useLayout();
  return (
    <>
      <Layout>
        <Mail />
      </Layout>
    </>
  );
};

export default dashboard;
