import React, { useEffect, useLayoutEffect } from "react";
import mockServer from "../mock";
import appConfig from "@/configs/app.config";
import "../locales";
import useAuth from "@/utils/hooks/useAuth";
const environment = process.env.NODE_ENV;
import { useRouter } from "next/router";
if (appConfig.enableMock) {
  mockServer({ environment });
}

export default function App() {
  const router = useRouter();
  const { authenticated } = useAuth();
  useLayoutEffect(() => {
    if (!authenticated) {
      router.push("/sign-in");
    }
    if (authenticated) {
      router.push("/app/sales/dashboard");
    }
  }, []);
  return <> </>;
}

// export default App;
