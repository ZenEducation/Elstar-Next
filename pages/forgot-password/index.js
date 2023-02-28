import React from "react";
// import SignInForm from "@/views/auth/SignIn/SignInForm";
import dynamic from "next/dynamic";

const Side = dynamic(() => import("../../components/layout/AuthLayout/Side"), {
  ssr: false,
});
// import { Sign } from "crypto";
import ForgotPassword from "@/views/auth/ForgotPassword/index";
const Login = () => {
  return (
    <div className="app-layout-blank flex flex-auto flex-col h-[100vh]">
      <Side>{<ForgotPassword />}</Side>
    </div>
  );
};

export default Login;
