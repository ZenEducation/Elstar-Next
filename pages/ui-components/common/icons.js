import React from "react";

import dynamic from "next/dynamic";

const Icons = dynamic(() => import("components/ui-components/common/Icons/index"), {
  ssr: false,
});

import useLayout from "utils/hooks/useLayout";
const Index = () => {
  const Layout = useLayout();
  return (
    <>
      <Layout>
        <Icons />
      </Layout>
    </>
  );
};

export default Index;
