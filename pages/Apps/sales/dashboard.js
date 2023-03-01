import dynamic from "next/dynamic";
import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
const Sales = dynamic(() => import("views/sales/SalesDashboard/index"), {
  ssr: false,
});

import useLayout from "utils/hooks/useLayout";
const Index = () => {
  const Layout = useLayout();
  const router = useRouter();

  const signedIn = useSelector((state) => state.auth.session.signedIn);

  if (signedIn == false) router.push("/sign-in");
  return (
    <>
      <Layout>
        <Sales />
      </Layout>
    </>
  );
};

export default Index;
