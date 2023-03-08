import React from "react";
import { DOCS_PREFIX_PATH } from "constants/route.constant";
// import SharedComponent from "components/docs/SharedComponentsDoc";
// import SharedDocs from "components/docs/Documentations";
// import SharedUtil from "components/docs/UtilsDoc";
// import SharedChange from "components/docs/ChangeLog";
import dynamic from "next/dynamic";

const SharedComponent = dynamic(
  () => import("components/docs/SharedComponentsDoc"),
  {
    ssr: false,
  }
);

const SharedDocs = dynamic(() => import("components/docs/UtilsDoc"), {
  ssr: false,
});
const SharedUtil = dynamic(() => import("components/docs/UtilsDoc"), {
  ssr: false,
});

const SharedChange = dynamic(() => import("components/docs/ChangeLog"), {
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
