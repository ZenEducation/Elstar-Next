import React from "react";
import Header from "components/template/Header";
import SidePanel from "components/template/SidePanel";
import UserDropdown from "components/template/UserDropdown";
import LanguageSelector from "components/template/LanguageSelector";
import Notification from "components/template/Notification";
import MobileNav from "components/template/MobileNav";
import Search from "components/template/Search";
import StackedSideNav from "components/template/StackedSideNav";

const HeaderActionsStart = () => {
  return (
    <>
      <MobileNav />
      <Search />
    </>
  );
};

const HeaderActionsEnd = () => {
  return (
    <>
      <LanguageSelector />
      <Notification />
      <SidePanel />
      <UserDropdown hoverable={false} />
    </>
  );
};

const StackedSideLayout = (props) => {
  return (
    <div className="app-layout-stacked-side flex flex-auto flex-col">
      <div className="flex flex-auto min-w-0">
        <StackedSideNav />
        <div className="flex flex-col flex-auto min-h-screen min-w-0 relative w-full">
          <Header
            className="shadow dark:shadow-2xl"
            headerStart={<HeaderActionsStart />}
            headerEnd={<HeaderActionsEnd />}
          />
          <div className="h-full flex flex-auto flex-col">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default StackedSideLayout;
