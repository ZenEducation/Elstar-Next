import dynamic from "next/dynamic";
import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
const Sales = dynamic(() => import("views/sales/SalesDashboard/index"), {
  ssr: false,
});

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});
const Index = () => {
  const router = useRouter();

  const signedIn = useSelector((state) => state.auth.session.signedIn);

  if (signedIn == false) router.push("/sign-in");
  return (
    <>
      <ClassicLayout>
        <Sales />
      </ClassicLayout>
    </>
  );
};

export default Index;
