import React from "react";

import dynamic from "next/dynamic";

const Welcome = dynamic(() => import("components/pages/Welcome/index"), {
  ssr: false,
});

import useLayout from "utils/hooks/useLayout";
const Index = () => {
  const Layout = useLayout();
  return (
    <>
      <Layout>
        <Welcome />
      </Layout>
    </>
  );
};

export default Index;
