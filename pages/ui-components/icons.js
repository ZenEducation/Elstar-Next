import React from "react";

import dynamic from "next/dynamic";

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});
const Icons = dynamic(() => import("views/ui-components/common/Icons/index"), {
  ssr: false,
});

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <Icons />
      </ClassicLayout>
    </>
  );
};

export default Index;
