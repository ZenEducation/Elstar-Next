import React from "react";

import dynamic from "next/dynamic";

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});

const Toast = dynamic(
  () => import("views/ui-components/feedback/Toast/index"),
  {
    ssr: false,
  }
);

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <Toast />
      </ClassicLayout>
    </>
  );
};

export default Index;
