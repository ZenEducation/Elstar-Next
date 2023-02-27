import React from "react";
import { Outlet } from "react-router-dom";
import { useRouter } from "next/router";
import appConfig from "configs/app.config";
import useAuth from "utils/hooks/useAuth";

const { authenticatedEntryPath } = appConfig;

const PublicRoute = () => {
  const navigate = useRouter();
  const { authenticated } = useAuth();

  return authenticated ? navigate.push({ authenticatedEntryPath }) : <Outlet />;
};

export default PublicRoute;
