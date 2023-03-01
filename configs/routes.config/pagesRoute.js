import React from "react";
import { PAGES_PREFIX_PATH } from "constants/route.constant";
import { ADMIN, USER } from "constants/roles.constant";
import dynamic from "next/dynamic";
const pagesRoute = [
  {
    key: "pages.welcome",
    path: `${PAGES_PREFIX_PATH}/welcome`,
    component: dynamic(() => import("views/pages/Welcome")),
    authority: [ADMIN, USER],
  },
  {
    key: "pages.accessDenied",
    path: "/pages/access-denied",
    component: dynamic(() => import("views/pages/AccessDenied")),
    authority: [ADMIN, USER],
  },
];

export default pagesRoute;
