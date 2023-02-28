import React from "react";

import dynamic from "next/dynamic";

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});

const AccessDenied = dynamic(() => import("views/pages/AccessDenied/index"), {
  ssr: false,
});

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <AccessDenied />
      </ClassicLayout>
    </>
  );
};

export default Index;
