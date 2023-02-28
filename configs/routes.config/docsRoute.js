import React from "react";
import { DOCS_PREFIX_PATH } from "constants/route.constant";
// import SharedComponent from "views/docs/SharedComponentsDoc";
// import SharedDocs from "views/docs/Documentations";
// import SharedUtil from "views/docs/UtilsDoc";
// import SharedChange from "views/docs/ChangeLog";
import dynamic from "next/dynamic";

const SharedComponent = dynamic(
  () => import("views/docs/SharedComponentsDoc"),
  {
    ssr: false,
  }
);

const SharedDocs = dynamic(() => import("views/docs/UtilsDoc"), {
  ssr: false,
});
const SharedUtil = dynamic(() => import("views/docs/UtilsDoc"), {
  ssr: false,
});

const SharedChange = dynamic(() => import("views/docs/ChangeLog"), {
  ssr: false,
});
const docsRoute = [
  {
    key: "docs.documentation",
    path: `${DOCS_PREFIX_PATH}/documentation/*`,
    component: <SharedDocs />,
    authority: [],
  },
  {
    key: "docs.sharedComponentDoc",
    path: `${DOCS_PREFIX_PATH}/shared-component-doc/*`,
    component: <SharedComponent />,
    authority: [],
  },
  {
    key: "docs.utilsDoc",
    path: `${DOCS_PREFIX_PATH}/utils-doc/*`,
    component: <SharedUtil />,
    authority: [],
  },
  {
    key: "docs.changeLog",
    path: `${DOCS_PREFIX_PATH}/changelog`,
    component: <SharedChange />,
    authority: [],
  },
];

export default docsRoute;
