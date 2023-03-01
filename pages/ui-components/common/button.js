import React from "react";

import dynamic from "next/dynamic";

const Button = dynamic(
  () => import("views/ui-components/common/Button/index"),
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
        <Button />
      </Layout>
    </>
  );
};

export default Index;
