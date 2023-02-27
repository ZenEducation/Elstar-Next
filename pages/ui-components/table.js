import React from "react";

import dynamic from "next/dynamic";

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});

const Table = dynamic(
  () => import("views/ui-components/data-display/Table/index"),
  {
    ssr: false,
  }
);

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <Table />
      </ClassicLayout>
    </>
  );
};

export default Index;
