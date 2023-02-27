import dynamic from "next/dynamic";
import React from "react";

const ActivityLog = dynamic(() => import("views/account/ActivityLog/index"), {
  ssr: false,
});

const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
  ssr: false,
});

const Index = () => {
  return (
    <>
      <ClassicLayout>
        <ActivityLog />
      </ClassicLayout>
    </>
  );
};

export default Index;
