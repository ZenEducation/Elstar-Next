import React from "react";

import dynamic from "next/dynamic";

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});

const Badge = dynamic(
  () => import("views/ui-components/data-display/Badge/index"),
  {
    ssr: false,
  }
);

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <Badge />
      </ClassicLayout>
    </>
  );
};

export default Index;
