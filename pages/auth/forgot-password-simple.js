import React from "react";

import dynamic from "next/dynamic";

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});

const ForgotPassword = dynamic(
  () => import("views/auth-demo/ForgotPassword/ForgotPasswordSimple"),
  {
    ssr: false,
  }
);

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <ForgotPassword />
      </ClassicLayout>
    </>
  );
};

export default Index;
