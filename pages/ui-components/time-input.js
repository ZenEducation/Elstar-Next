import React from "react";

import dynamic from "next/dynamic";

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});

const TimeInput = dynamic(
  () => import("views/ui-components/forms/TimeInput/index"),
  {
    ssr: false,
  }
);

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <TimeInput />
      </ClassicLayout>
    </>
  );
};

export default Index;
