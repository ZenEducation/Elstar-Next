import React from "react";

import dynamic from "next/dynamic";

const ResetPassword = dynamic(
  () => import("components/auth-demo/ResetPassword/ResetPasswordSide"),
  {
    ssr: false,
  }
);

const Index = () => {
  return (
    <div className="app-layout-blank flex flex-auto flex-col h-[100vh]">
      <ResetPassword />
    </div>
  );
};

export default Index;
