import React from "react";

import dynamic from "next/dynamic";

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});

const Tag = dynamic(
  () => import("views/ui-components/data-display/Tag/index"),
  {
    ssr: false,
  }
);

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <Tag />
      </ClassicLayout>
    </>
  );
};

export default Index;
