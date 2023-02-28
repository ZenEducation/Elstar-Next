import React from "react";

import dynamic from "next/dynamic";

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});

const Welcome = dynamic(() => import("views/pages/Welcome/index"), {
  ssr: false,
});

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <Welcome />
      </ClassicLayout>
    </>
  );
};

export default Index;
