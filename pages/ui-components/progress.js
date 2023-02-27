import React from "react";

import dynamic from "next/dynamic";

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});

const Progress = dynamic(
  () => import("views/ui-components/feedback/Progress/index"),
  {
    ssr: false,
  }
);

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <Progress />
      </ClassicLayout>
    </>
  );
};

export default Index;
