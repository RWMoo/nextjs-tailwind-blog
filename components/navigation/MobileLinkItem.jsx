import React from "react";
import Link from "next/link";
import { Menu } from "@headlessui/react";

const MobileLinkItem = ({ name, link, setOpen }) => {
  return (
    <Link href={link} passHref>
      <Menu.Item
        onClick={() => {
          setOpen(false);
        }}
        className="text-center text-sm text-nav transition duration-300 hover:text-accent"
      >
        {() => <a>{name}</a>}
      </Menu.Item>
    </Link>
  );
};

export default MobileLinkItem;
