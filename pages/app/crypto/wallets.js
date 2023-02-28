import dynamic from "next/dynamic";
import React from "react";
const Wallets = dynamic(() => import("views/crypto/Wallets/index"), {
  ssr: false,
});

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});
const Index = () => {
  return (
    <>
      <ClassicLayout>
        <Wallets />
      </ClassicLayout>
    </>
  );
};

export default Index;
