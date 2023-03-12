import React from "react";

import dynamic from "next/dynamic";

const Calendar = dynamic(
  () => import("components/ui-components/data-display/Calendar/index"),
  {
    ssr: false,
  }
);

import useLayout from "utils/hooks/useLayout";
const Index = () => {
  const Layout = useLayout();
  return (
    <>
      <Layout>
        <Calendar />
      </Layout>
    </>
  );
};

export default Index;
