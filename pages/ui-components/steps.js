import React from "react";

import dynamic from "next/dynamic";

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});

const Steps = dynamic(
  () => import("views/ui-components/navigation/Steps/index"),
  {
    ssr: false,
  }
);

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <Steps />
      </ClassicLayout>
    </>
  );
};

export default Index;
