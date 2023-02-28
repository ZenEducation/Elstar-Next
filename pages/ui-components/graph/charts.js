import React from "react";

import dynamic from "next/dynamic";

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});

const Charts = dynamic(() => import("views/ui-components/graph/Charts/index"), {
  ssr: false,
});

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <Charts />
      </ClassicLayout>
    </>
  );
};

export default Index;
