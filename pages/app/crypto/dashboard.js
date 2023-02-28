import dynamic from "next/dynamic";
import React from "react";

const CryptoDashboard = dynamic(
  () => import("views/crypto/CryptoDashboard/index"),
  {
    ssr: false,
  }
);

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});
const Index = () => {
  return (
    <>
      <ClassicLayout>
        <CryptoDashboard />
      </ClassicLayout>
    </>
  );
};

export default Index;
