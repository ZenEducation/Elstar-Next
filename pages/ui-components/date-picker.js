import React from "react";

import dynamic from "next/dynamic";

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});

const DatePicker = dynamic(
  () => import("views/ui-components/forms/DatePicker/index"),
  {
    ssr: false,
  }
);

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <DatePicker />
      </ClassicLayout>
    </>
  );
};

export default Index;
