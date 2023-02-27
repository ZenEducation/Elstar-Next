import React from "react";

import dynamic from "next/dynamic";

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});

const TypoGraphy = dynamic(
  () => import("views/ui-components/common/Typography/index"),
  {
    ssr: false,
  }
);

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <TypoGraphy />
      </ClassicLayout>
    </>
  );
};

export default Index;
