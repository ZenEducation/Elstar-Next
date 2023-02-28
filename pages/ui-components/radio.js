import React from "react";

import dynamic from "next/dynamic";

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});

const Radio = dynamic(() => import("views/ui-components/forms/Radio/index"), {
  ssr: false,
});

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <Radio />
      </ClassicLayout>
    </>
  );
};

export default Index;
