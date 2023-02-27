import React, { Fragment, Suspense } from "react";
import { Spinner } from "components/ui";
import documentationRoutes from "./documentationRoutes";
import DocumentationWrapper from "./DocumentationWrapper";
import { Routes, Route, Navigate } from "react-router-dom";

const DocumentationView = () => {
  return (
    <>
      {/* {documentationRoutes.map((group) => (
        <Fragment key={group.groupName}>
          {group.nav.map(({ path, component: Component, label }) => (
            <Suspense
              fallback={
                <div className="h-full w-full flex items-center justify-center">
                  <Spinner size={40} />
                </div>
              }
            >
              <DocumentationWrapper title={label}>
                <Component />
              </DocumentationWrapper>
            </Suspense>
          ))}
        </Fragment>
      ))} */}
    </>
  );
};

export default DocumentationView;
