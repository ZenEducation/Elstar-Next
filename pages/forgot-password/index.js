import React from "react";
// import SignInForm from "@/components/auth/SignIn/SignInForm";
import dynamic from "next/dynamic";

const Side = dynamic(() => import("../../components/layout/AuthLayout/Side"), {
  ssr: false,
});
// import { Sign } from "crypto";
import ForgotPassword from "@/components/auth/ForgotPassword/index";
const Login = () => {
  return (
    <div className="app-layout-blank flex flex-auto flex-col h-[100vh]">
      <Side>
        <ForgotPassword />
      </Side>
    </div>
  );
};

export default Login;
