import React from "react";

import dynamic from "next/dynamic";

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});

const Select = dynamic(() => import("views/ui-components/forms/Select/index"), {
  ssr: false,
});

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <Select />
      </ClassicLayout>
    </>
  );
};

export default Index;
