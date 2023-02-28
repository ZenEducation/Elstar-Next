import React from "react";

import dynamic from "next/dynamic";

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});

const Menu = dynamic(
  () => import("views/ui-components/navigation/Menu/index"),
  {
    ssr: false,
  }
);

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <Menu />
      </ClassicLayout>
    </>
  );
};

export default Index;
