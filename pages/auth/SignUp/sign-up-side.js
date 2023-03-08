import React from "react";

import dynamic from "next/dynamic";

const SignUp = dynamic(() => import("components/auth-demo/SignUp/SignUpSide"), {
  ssr: false,
});

const Index = () => {
  return (
    <div className="app-layout-blank flex flex-auto flex-col h-[100vh]">
      <SignUp />
    </div>
  );
};

export default Index;
