import React from "react";
import { AdaptableCard } from "components/shared";
import DocumentationNav from "components/docs/DocumentationNav";
import shareComponentsDocRoutes from "./shareComponentsDocRoutes";
import ShareComponentsDocView from "./ShareComponentsDocView";

const SharedComponentsDoc = () => {
  return (
    <AdaptableCard className="h-full" bodyClass="lg:flex h-full gap-8">
      <div className="w-full">
        <ShareComponentsDocView />
      </div>
    </AdaptableCard>
  );
};

export default SharedComponentsDoc;
