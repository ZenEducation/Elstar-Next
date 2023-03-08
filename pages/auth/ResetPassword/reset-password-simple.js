import React from "react";

import dynamic from "next/dynamic";

const ResetPassword = dynamic(
  () => import("components/auth-demo/ResetPassword/ResetPasswordSimple"),
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
        <ResetPassword />
      </Layout>
    </>
  );
};

export default Index;
