import React from "react";
import dynamic from "next/dynamic";
const SignIn = dynamic(() => import("views/auth/SignIn/SignIn"), {
  ssr: false,
});
const Side = dynamic(() => import("../../components/layout/AuthLayout/Side"), {
  ssr: false,
});
const Login = () => {
  return (
    <div className="app-layout-blank flex flex-auto flex-col h-[100vh]">
      <Side>
        <SignIn />
      </Side>
    </div>
  );
};

export default Login;
