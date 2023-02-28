import React from "react";

import dynamic from "next/dynamic";

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});

const Maps = dynamic(() => import("views/ui-components/graph/Maps/index"), {
  ssr: false,
});

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <Maps />
      </ClassicLayout>
    </>
  );
};

export default Index;
