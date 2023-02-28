import React from "react";

import dynamic from "next/dynamic";

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});

const Button = dynamic(
  () => import("views/ui-components/common/Button/index"),
  {
    ssr: false,
  }
);

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <Button />
      </ClassicLayout>
    </>
  );
};

export default Index;
