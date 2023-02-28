import React from "react";

import dynamic from "next/dynamic";

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});

const Cards = dynamic(
  () => import("views/ui-components/data-display/Cards/index"),
  {
    ssr: false,
  }
);

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <Cards />
      </ClassicLayout>
    </>
  );
};

export default Index;
