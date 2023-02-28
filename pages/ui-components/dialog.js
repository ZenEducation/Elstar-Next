import React from "react";

import dynamic from "next/dynamic";

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});

const Dialog = dynamic(
  () => import("views/ui-components/feedback/Dialog/index"),
  {
    ssr: false,
  }
);

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <Dialog />
      </ClassicLayout>
    </>
  );
};

export default Index;
