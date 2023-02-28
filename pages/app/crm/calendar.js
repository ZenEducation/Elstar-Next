import React from "react";
import dynamic from "next/dynamic";

const Calendar = dynamic(() => import("views/crm/Calendar/index"), {
  ssr: false,
});

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});
const dashboard = () => {
  return (
    <>
      <ClassicLayout>
        <Calendar />
      </ClassicLayout>
    </>
  );
};

export default dashboard;
