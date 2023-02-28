import React from "react";

import dynamic from "next/dynamic";

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});

const FormControl = dynamic(
  () => import("views/ui-components/forms/FormControl/index"),
  {
    ssr: false,
  }
);

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <FormControl />
      </ClassicLayout>
    </>
  );
};

export default Index;
