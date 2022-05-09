import { Menu } from "@headlessui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { breakpoints } from "../../utils";
import {
  navigationContainerVariants,
  navigationItemVariants,
} from "../../utils/animations";
import { links } from "../../utils/links";
import SocialIcons from "../global/SocialIcons";
import DarkModeSwitch from "./DarkModeSwitch";
import DesktopLinkItem from "./DesktopLinkItem";
import MobileLinkItem from "./MobileLinkItem";

const Navigation = () => {
  const width = useWindowWidth();
  const isDesktop = width >= breakpoints.lg;
  return (
    <nav className="flex py-6 z-40 justify-between items-center px-6 h-20 w-full bg-nav shadow-lg">
      {isDesktop && <DesktopNavigation />}
      {!isDesktop && <MobileNavigation />}
      <DarkModeSwitch />
    </nav>
  );
};

export default Navigation;

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <Menu>
      <Menu.Button onClick={() => setOpen(true)}>
        <FaBars className="text-xl text-nav transition duration-300 " />
      </Menu.Button>
      {open && (
        <Menu.Items className="w-full absolute left-0 py-4 bg-nav shadow-xl top-0 z-40 flex flex-col font-display">
          <motion.div
            className="justify-center space-y-6 my-8 flex flex-col items-center w-full"
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={navigationContainerVariants}
          >
            <Link href={"/"} passHref>
              <button className="font-title text-4xl font-bold my-2 text-nav">
                Rm
              </button>
            </Link>
            {links.map((item) => (
              <motion.div variants={navigationItemVariants} key={item.name}>
                <MobileLinkItem setOpen={setOpen} {...item} />
              </motion.div>
            ))}
            <div className="flex justify-center text-xl space-x-8 py-4 text-nav">
              <SocialIcons />
            </div>
          </motion.div>
        </Menu.Items>
      )}
    </Menu>
  );
};

const DesktopNavigation = () => {
  return (
    <motion.div
      className="justify-center space-y-6 my-8 flex flex-col items-center w-full"
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={navigationContainerVariants}
    >
      <div className="flex items-center justify-between w-full">
        <Link href={"/"} passHref>
          <button className="font-title text-4xl lg:text-3xl font-bold my-2 text-nav self-start">
            Rm
          </button>
        </Link>
        <div className="flex space-x-16 2xl:space-x-20 justify-center flex-grow">
          {links.slice(1).map((item) => (
            <div variants={navigationItemVariants} key={item.name}>
              <DesktopLinkItem {...item} />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
