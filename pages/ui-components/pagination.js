import React from "react";

import dynamic from "next/dynamic";

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});

const Pagination = dynamic(
  () => import("views/ui-components/navigation/Pagination/index"),
  {
    ssr: false,
  }
);

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <Pagination />
      </ClassicLayout>
    </>
  );
};

export default Index;
