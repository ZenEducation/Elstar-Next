import React from "react";

import dynamic from "next/dynamic";

const Dropdown = dynamic(
  () => import("components/ui-components/navigation/Dropdown/index"),
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
        <Dropdown />
      </Layout>
    </>
  );
};

export default Index;
