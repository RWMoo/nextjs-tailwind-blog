import React from "react";
import Link from "next/link";
import { Menu } from "@headlessui/react";

const DesktopLinkItem = ({ name, link }) => {
  return (
    <Link href={link} passHref>
      <a className="text-center text-nav font-display">
        {name}
      </a>
    </Link>
  );
};

export default DesktopLinkItem;
