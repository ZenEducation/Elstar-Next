import React from "react";

import dynamic from "next/dynamic";

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});

const Tooltip = dynamic(
  () => import("views/ui-components/data-display/Tooltip/index"),
  {
    ssr: false,
  }
);

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <Tooltip />
      </ClassicLayout>
    </>
  );
};

export default Index;
