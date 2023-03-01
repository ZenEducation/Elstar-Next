import React from "react";
import dynamic from "next/dynamic";

const Calendar = dynamic(() => import("views/crm/Calendar/index"), {
  ssr: false,
});

import useLayout from "utils/hooks/useLayout";
const dashboard = () => {
  const Layout = useLayout();
  return (
    <>
      <Layout>
        <Calendar />
      </Layout>
    </>
  );
};

export default dashboard;
