import React from "react";

import dynamic from "next/dynamic";

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});

const Dropdown = dynamic(
  () => import("views/ui-components/navigation/Dropdown/index"),
  {
    ssr: false,
  }
);

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <Dropdown />
      </ClassicLayout>
    </>
  );
};

export default Index;
