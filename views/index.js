import React, { Suspense } from "react";
import { Loading } from "components/shared";
import { protectedRoutes, publicRoutes } from "configs/routes.config";
import appConfig from "configs/app.config";
import PageContainer from "components/template/PageContainer";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ProtectedRoute from "components/route/ProtectedRoute";
import PublicRoute from "components/route/PublicRoute";
import AuthorityGuard from "components/route/AuthorityGuard";
import AppRoute from "components/route/AppRoute";

const { authenticatedEntryPath } = appConfig;

const AllRoutes = (props) => {
  const userAuthority = useSelector((state) => state.auth.user.authority);

  return <></>;
};

const Views = (props) => {
  return (
    <Suspense fallback={<Loading loading={true} />}>
      <AllRoutes {...props} />
    </Suspense>
  );
};

export default Views;
