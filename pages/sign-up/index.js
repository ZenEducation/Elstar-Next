import React from "react";
// import SignInForm from "@/components/auth/SignIn/SignInForm";
import dynamic from "next/dynamic";
import SignUp from "@/components/auth/SignUp/index";
const Side = dynamic(() => import("../../components/layout/AuthLayout/Side"), {
  ssr: false,
});
// import { Sign } from "crypto";
const Login = () => {
  return (
    <div className="app-layout-blank flex flex-auto flex-col h-[100vh]">
      <Side>
        <SignUp />
      </Side>
    </div>
  );
};

export default Login;
