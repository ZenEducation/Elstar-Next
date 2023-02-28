import React from "react";

import dynamic from "next/dynamic";

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});

const Tabs = dynamic(
  () => import("views/ui-components/navigation/Tabs/index"),
  {
    ssr: false,
  }
);

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <Tabs />
      </ClassicLayout>
    </>
  );
};

export default Index;
