import React from "react";

import dynamic from "next/dynamic";

const Badge = dynamic(
  () => import("views/ui-components/data-display/Badge/index"),
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
        <Badge />
      </Layout>
    </>
  );
};

export default Index;
