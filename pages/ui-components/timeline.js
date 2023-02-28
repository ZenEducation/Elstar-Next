import React from "react";

import dynamic from "next/dynamic";

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});

const Timeline = dynamic(
  () => import("views/ui-components/data-display/Timelin/index"),
  {
    ssr: false,
  }
);

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <Timeline />
      </ClassicLayout>
    </>
  );
};

export default Index;
