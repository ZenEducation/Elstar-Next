import React from "react";
import { AUTH_PREFIX_PATH } from "constants/route.constant";
import { ADMIN, USER } from "constants/roles.constant";
import dynamic from "next/dynamic";
const authDemoRoute = [
  {
    key: "authentication.signInSimple",
    path: `${AUTH_PREFIX_PATH}/sign-in-simple`,
    component: dynamic(() => import("components/auth-demo/SignIn/SignInSimple")),
    authority: [ADMIN, USER],
    meta: {
      layout: "blank",
      pageContainerType: "gutterless",
      footer: false,
    },
  },
  {
    key: "authentication.signInSide",
    path: `${AUTH_PREFIX_PATH}/sign-in-side`,
    component: dynamic(() => import("components/auth-demo/SignIn/SignInSide")),
    authority: [ADMIN, USER],
    meta: {
      layout: "blank",
      pageContainerType: "gutterless",
      footer: false,
    },
  },
  {
    key: "authentication.signInCover",
    path: `${AUTH_PREFIX_PATH}/sign-in-cover`,
    component: dynamic(() => import("components/auth-demo/SignIn/SignInCover")),
    authority: [ADMIN, USER],
    meta: {
      layout: "blank",
      pageContainerType: "gutterless",
      footer: false,
    },
  },
  {
    key: "authentication.signUpSimple",
    path: `${AUTH_PREFIX_PATH}/sign-up-simple`,
    component: dynamic(() => import("components/auth-demo/SignUp/SignUpSimple")),
    authority: [ADMIN, USER],
    meta: {
      layout: "blank",
      pageContainerType: "gutterless",
      footer: false,
    },
  },
  {
    key: "authentication.signUpSide",
    path: `${AUTH_PREFIX_PATH}/sign-up-side`,
    component: dynamic(() => import("components/auth-demo/SignUp/SignUpSide")),
    authority: [ADMIN, USER],
    meta: {
      layout: "blank",
      pageContainerType: "gutterless",
      footer: false,
    },
  },
  {
    key: "authentication.signUpCover",
    path: `${AUTH_PREFIX_PATH}/sign-up-cover`,
    component: dynamic(() => import("components/auth-demo/SignUp/SignUpCover")),
    authority: [ADMIN, USER],
    meta: {
      layout: "blank",
      pageContainerType: "gutterless",
      footer: false,
    },
  },
  {
    key: "authentication.forgotPasswordSimple",
    path: `${AUTH_PREFIX_PATH}/forgot-password-simple`,
    component: dynamic(() =>
      import("components/auth-demo/ForgotPassword/ForgotPasswordSimple")
    ),
    authority: [ADMIN, USER],
    meta: {
      layout: "blank",
      pageContainerType: "gutterless",
      footer: false,
    },
  },
  {
    key: "authentication.forgotPasswordSide",
    path: `${AUTH_PREFIX_PATH}/forgot-password-side`,
    component: dynamic(() =>
      import("components/auth-demo/ForgotPassword/ForgotPasswordSide")
    ),
    authority: [ADMIN, USER],
    meta: {
      layout: "blank",
      pageContainerType: "gutterless",
      footer: false,
    },
  },
  {
    key: "authentication.forgotPasswordCover",
    path: `${AUTH_PREFIX_PATH}/forgot-password-cover`,
    component: dynamic(() =>
      import("components/auth-demo/ForgotPassword/ForgotPasswordCover")
    ),
    authority: [ADMIN, USER],
    meta: {
      layout: "blank",
      pageContainerType: "gutterless",
      footer: false,
    },
  },
  {
    key: "authentication.resetPasswordSimple",
    path: `${AUTH_PREFIX_PATH}/reset-password-simple`,
    component: dynamic(() =>
      import("components/auth-demo/ResetPassword/ResetPasswordSimple")
    ),
    authority: [ADMIN, USER],
    meta: {
      layout: "blank",
      pageContainerType: "gutterless",
      footer: false,
    },
  },
  {
    key: "authentication.resetPasswordSide",
    path: `${AUTH_PREFIX_PATH}/reset-password-side`,
    component: dynamic(() =>
      import("components/auth-demo/ResetPassword/ResetPasswordSide")
    ),
    authority: [ADMIN, USER],
    meta: {
      layout: "blank",
      pageContainerType: "gutterless",
      footer: false,
    },
  },
  {
    key: "authentication.resetPasswordCover",
    path: `${AUTH_PREFIX_PATH}/reset-password-cover`,
    component: dynamic(() =>
      import("components/auth-demo/ResetPassword/ResetPasswordCover")
    ),
    authority: [ADMIN, USER],
    meta: {
      layout: "blank",
      pageContainerType: "gutterless",
      footer: false,
    },
  },
];

export default authDemoRoute;
