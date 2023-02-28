import React from "react";

import dynamic from "next/dynamic";

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});

const ResetPassword = dynamic(
  () => import("views/auth-demo/ResetPassword/ResetPasswordSimple"),
  {
    ssr: false,
  }
);

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <ResetPassword />
      </ClassicLayout>
    </>
  );
};

export default Index;
