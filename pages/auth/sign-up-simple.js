import React from "react";

import dynamic from "next/dynamic";
const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});
const SignUpSimple = dynamic(
  () => import("views/auth-demo/SignUp/SignUpSimple"),
  {
    ssr: false,
  }
);

const Index = () => {
  return (
    <ClassicLayout>
      <SignUpSimple />
    </ClassicLayout>
  );
};

export default Index;
