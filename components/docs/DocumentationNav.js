import React, { useState } from "react";
import { Drawer, Button } from "components/ui";
import { NavToggle } from "components/shared";
import useThemeClass from "utils/hooks/useThemeClass";
// import { NavLink } from 'react-router-dom'
import Link from "next/link";
const NavContent = ({ onLinkClick, routes }) => {
  const { textTheme, borderTheme } = useThemeClass();

  const activeClass = `${textTheme} hover:${textTheme} ${borderTheme}`;

  return <></>;
};

const MobileNav = ({ routes }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => {
    setIsOpen(true);
  };

  const onDrawerClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button
        className="lg:hidden"
        shape="circle"
        variant="plain"
        icon={<NavToggle className="text-2xl" toggled={isOpen} />}
        onClick={openDrawer}
      />
      <Drawer
        title="Navigation"
        isOpen={isOpen}
        onClose={onDrawerClose}
        onRequestClose={onDrawerClose}
        width={300}
        placement="left"
      >
        <NavContent onLinkClick={onDrawerClose} routes={routes} />
      </Drawer>
    </>
  );
};

const DocumentationNav = ({ routes }) => {
  return (
    <div className="flex flex-col">
      <div className="hidden lg:block">
        <NavContent routes={routes} />
      </div>
      <MobileNav routes={routes} />
    </div>
  );
};

export default DocumentationNav;
