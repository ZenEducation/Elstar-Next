import dynamic from "next/dynamic";
import React from "react";
// import ShareComponentsDocView from "@/views/docs/SharedComponentsDoc/index";
const SharedComponentsDoc = dynamic(
  () => import("views/docs/SharedComponentsDoc/index"),
  {
    ssr: false,
  }
);

const Layout = dynamic(() => import("components/layout/index"), {
  ssr: false,
});
const Index = () => {
  return (
    <>
      <Layout>
        <SharedComponentsDoc />
      </Layout>
    </>
  );
};

export default Index;
