import React from "react";

import dynamic from "next/dynamic";

const SignInSimple = dynamic(
  () => import("components/auth-demo/SignIn/SignInSimple"),
  {
    ssr: false,
  }
);

import useLayout from "utils/hooks/useLayout";
const Index = () => {
  const Layout = useLayout();
  return (
    <Layout>
      <SignInSimple />
    </Layout>
  );
};

export default Index;
