import React from "react";

import dynamic from "next/dynamic";

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});

const Calendar = dynamic(
  () => import("views/ui-components/data-display/Calendar/index"),
  {
    ssr: false,
  }
);

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <Calendar />
      </ClassicLayout>
    </>
  );
};

export default Index;
