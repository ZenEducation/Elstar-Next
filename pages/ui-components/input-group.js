import React from "react";

import dynamic from "next/dynamic";

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});

const InputGroup = dynamic(
  () => import("views/ui-components/forms/InputGroup/index"),
  {
    ssr: false,
  }
);

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <InputGroup />
      </ClassicLayout>
    </>
  );
};

export default Index;
