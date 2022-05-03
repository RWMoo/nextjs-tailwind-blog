import React from "react";
import Link from "next/link";
import { Menu } from "@headlessui/react";

const LinkItem = ({ name, link }) => {
  return (
    <Menu.Item className="py-3 text-center text-primary ">
      {() => (
        <Link href={link} passHref>
          <a
            className={`bg-secondary hover:bg-primary py-4 text-center text-sm text-accent font-display`}
          >
            {name}
          </a>
        </Link>
      )}
    </Menu.Item>
  );
};

export default LinkItem;
