import React from "react";
import dynamic from "next/dynamic";
const authRoute = [
  {
    key: "signIn",
    path: `/sign-in`,
    component: dynamic(() => import("@/views/auth/SignIn/SignIn"), {
      ssr: false,
    }),
    authority: [],
  },
  {
    key: "signUp",
    path: `/sign-up`,
    component: dynamic(() => import("views/auth/SignUp"), {
      ssr: false,
    }),
    authority: [],
  },
  {
    key: "forgotPassword",
    path: `/forgot-password`,
    component: dynamic(() => import("views/auth/ForgotPassword"), {
      ssr: false,
    }),
    authority: [],
  },
  {
    key: "resetPassword",
    path: `/reset-password`,
    component: dynamic(() => import("views/auth/ResetPassword"), {
      ssr: false,
    }),
    authority: [],
  },
];

export default authRoute;
