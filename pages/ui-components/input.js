import React from "react";

import dynamic from "next/dynamic";

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});

const Input = dynamic(() => import("views/ui-components/forms/Input/index"), {
  ssr: false,
});

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <Input />
      </ClassicLayout>
    </>
  );
};

export default Index;
