import React from "react";

import dynamic from "next/dynamic";

const SignUpSimple = dynamic(
  () => import("views/auth-demo/SignUp/SignUpSimple"),
  {
    ssr: false,
  }
);

import useLayout from "utils/hooks/useLayout";
const Index = () => {
  const Layout = useLayout();
  return (
    <Layout>
      <SignUpSimple />
    </Layout>
  );
};

export default Index;
