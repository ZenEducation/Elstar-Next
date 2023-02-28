import React from "react";

import dynamic from "next/dynamic";

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});

const Checkbox = dynamic(
  () => import("views/ui-components/forms/Checkbox/index"),
  {
    ssr: false,
  }
);

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <Checkbox />
      </ClassicLayout>
    </>
  );
};

export default Index;
