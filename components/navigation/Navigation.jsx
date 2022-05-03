import { Menu } from "@headlessui/react";
import { motion } from "framer-motion";
import { FaBars, FaSearch } from "react-icons/fa";
import LinkItem from "./LinkItem";
import DarkModeSwitch from "./DarkModeSwitch";
import {
  navigationContainerVariants,
  navigationItemVariants,
} from "../../utils/animations";

const links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Discord",
    link: "https://discord.gg/programming",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const Navigation = () => {
  return (
    <nav className="flex py-6 justify-between items-center px-5 h-20 w-full">
      <Menu>
        <Menu.Button>
          <FaBars className="text-xl " />
        </Menu.Button>
        <Menu.Items className="w-full absolute left-0 py-4 shadow-lg top-0 z-40 flex flex-col font-display">
          <motion.div
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={navigationContainerVariants}
          >
            {links.map((item) => (
              <motion.div
                variants={navigationItemVariants}
                key={item.name}
                className="h-16 justify-center flex"
              >
                <LinkItem {...item} />
              </motion.div>
            ))}
          </motion.div>
        </Menu.Items>
      </Menu>
      <div className="flex justify-end items-center space-x-4 flex-grow">
        <button onClick={() => setShowSearch(!showSearch)}>
          <FaSearch className={"text-lg ml-2"} />
        </button>
        <div>
          <DarkModeSwitch />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
