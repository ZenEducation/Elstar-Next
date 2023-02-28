import React from "react";

import dynamic from "next/dynamic";

const SignIn = dynamic(() => import("views/auth-demo/SignIn/SignInCover"), {
  ssr: false,
});

const Index = () => {
  return (
    <div className="app-layout-blank flex flex-auto flex-col h-[100vh]">
      <SignIn />
    </div>
  );
};

export default Index;
