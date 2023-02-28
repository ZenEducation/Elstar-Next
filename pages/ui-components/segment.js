import React from "react";

import dynamic from "next/dynamic";

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});

const Segment = dynamic(
  () => import("views/ui-components/forms/Segment/index"),
  {
    ssr: false,
  }
);

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <Segment />
      </ClassicLayout>
    </>
  );
};

export default Index;
