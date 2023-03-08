import React from "react";

import dynamic from "next/dynamic";

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});

const ForgotPassword = dynamic(
  () => import("components/auth-demo/ForgotPassword/ForgotPasswordSide"),
  {
    ssr: false,
  }
);

const Index = () => {
  return (
    <div className="app-layout-blank flex flex-auto flex-col h-[100vh]">
      <ForgotPassword />
    </div>
  );
};

export default Index;
