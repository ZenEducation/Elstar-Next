import React from "react";

import dynamic from "next/dynamic";
const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});
const SignInSimple = dynamic(
  () => import("views/auth-demo/SignIn/SignInSimple"),
  {
    ssr: false,
  }
);

const Index = () => {
  return (
    <ClassicLayout>
      <SignInSimple />
    </ClassicLayout>
  );
};

export default Index;
