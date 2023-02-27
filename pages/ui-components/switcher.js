import React from "react";

import dynamic from "next/dynamic";

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});

const Switcher = dynamic(
  () => import("views/ui-components/forms/Switcher/index"),
  {
    ssr: false,
  }
);

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <Switcher />
      </ClassicLayout>
    </>
  );
};

export default Index;
