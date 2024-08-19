import React from "react";
import NavbarMobile from "../all/NavbarMobile";
import NavbarLink from "../all/NavbarLink";

interface Props {
  isHidden: boolean;
  onClick: () => void;
}

const Menu = ({ isHidden, onClick }: Props) => {
  const hidden = isHidden === true ? "hidden" : "";
  const links = [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "/about",
      title: "About",
    },
    {
      href: "/",
      title: "Contact",
    },
  ];
  return (
    <div className={`${hidden} fixed z-50 inset-0 h-full bg-white`}>
      <div className="fixed top-0 right-0 left-0">
        <NavbarMobile isClose={!isHidden} onClick={onClick} />
      </div>
      <div className="h-full flex items-center justify-center">
        <div className="flex flex-col space-y-8">
          {links.map((link, index) => (
            <NavbarLink
              title={link.title}
              link={link.href}
              delay={index}
              key={link.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
