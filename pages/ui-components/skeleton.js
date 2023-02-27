import React from "react";

import dynamic from "next/dynamic";

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});

const Skeleton = dynamic(
  () => import("views/ui-components/feedback/Skeleton/index"),
  {
    ssr: false,
  }
);

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <Skeleton />
      </ClassicLayout>
    </>
  );
};

export default Index;
