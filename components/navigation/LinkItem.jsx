import React from "react";
import Link from "next/link";
import { Menu } from "@headlessui/react";

const LinkItem = ({ name, link }) => {
  return (
    <Menu.Item className="py-3 text-center">
      {() => (
        <Link href={link} passHref>
          <a
            className={`py-4 text-center text-sm bg-gray-300 w-full`}
          >
            {name}
          </a>
        </Link>
      )}
    </Menu.Item>
  );
};

export default LinkItem;
