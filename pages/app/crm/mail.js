import React from "react";
import dynamic from "next/dynamic";
// import Mail from "@/views/crm/Mail/index";
const Mail = dynamic(() => import("views/crm/Mail/index"), {
  ssr: false,
});
const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});
const dashboard = () => {
  return (
    <>
      <ClassicLayout>
        <Mail />
      </ClassicLayout>
    </>
  );
};

export default dashboard;
