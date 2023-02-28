import React from "react";

import dynamic from "next/dynamic";

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});

const Avatar = dynamic(
  () => import("views/ui-components/data-display/Avatar/index"),
  {
    ssr: false,
  }
);

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <Avatar />
      </ClassicLayout>
    </>
  );
};

export default Index;
