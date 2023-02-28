import React from "react";

import dynamic from "next/dynamic";

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});

const Drawer = dynamic(
  () => import("views/ui-components/feedback/Drawer/index"),
  {
    ssr: false,
  }
);

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <Drawer />
      </ClassicLayout>
    </>
  );
};

export default Index;
