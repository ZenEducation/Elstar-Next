import React from "react";

import dynamic from "next/dynamic";

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});

const Spinner = dynamic(
  () => import("views/ui-components/feedback/Spinner/index"),
  {
    ssr: false,
  }
);

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <Spinner />
      </ClassicLayout>
    </>
  );
};

export default Index;
