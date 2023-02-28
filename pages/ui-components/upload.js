import React from "react";

import dynamic from "next/dynamic";

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});

const Upload = dynamic(() => import("views/ui-components/forms/Upload/index"), {
  ssr: false,
});

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <Upload />
      </ClassicLayout>
    </>
  );
};

export default Index;
