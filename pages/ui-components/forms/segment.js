import React from "react";

import dynamic from "next/dynamic";

const Segment = dynamic(
  () => import("views/ui-components/forms/Segment/index"),
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
        <Segment />
      </Layout>
    </>
  );
};

export default Index;
