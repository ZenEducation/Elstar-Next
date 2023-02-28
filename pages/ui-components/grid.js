import React from "react";

import dynamic from "next/dynamic";

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});
const Grid = dynamic(() => import("views/ui-components/common/Grid/index"), {
  ssr: false,
});

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <Grid />
      </ClassicLayout>
    </>
  );
};

export default Index;
