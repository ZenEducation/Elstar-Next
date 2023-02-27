import React from "react";

import dynamic from "next/dynamic";

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});

const Alert = dynamic(
  () => import("views/ui-components/feedback/Alert/index"),
  {
    ssr: false,
  }
);

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <Alert />
      </ClassicLayout>
    </>
  );
};

export default Index;
