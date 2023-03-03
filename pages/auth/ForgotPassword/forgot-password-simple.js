import React from "react";

import dynamic from "next/dynamic";

const ForgotPassword = dynamic(
  () => import("views/auth-demo/ForgotPassword/ForgotPasswordSimple"),
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
        <ForgotPassword />
      </Layout>
    </>
  );
};

export default Index;
