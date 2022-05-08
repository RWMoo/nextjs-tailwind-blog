import Link from "next/link";
import { currentDate } from "../../utils";
import { links } from "../../utils/links";
import SocialIcons from "../global/SocialIcons";
import { motion } from "framer-motion";
import { fadeInOut } from "../../utils/animations";

const Footer = () => {
  return (
    <motion.footer variants={fadeInOut} initial="initial" animate="animate" transition={{delay: 0.2}} className="text-center space-y-8 py-10 mt-8 md:mt-12 bg-nav">
      <Link href={"/"} passHref>
        <button className="font-title text-4xl font-bold text-nav">
          Rm
        </button>
      </Link>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12 text-sm xl:text-base font-semibold font-display">
        {links.slice(1).map(({ name, link }) => {
          return (
            <Link key={link} href={link} passHref>
              <a
                className={`text-center text-nav font-normal font-display`}
              >
                {name}
              </a>
            </Link>
          );
        })}
      </div>
      <div className="flex justify-center space-x-8 text-xl">
        <SocialIcons />
      </div>
      <p className="text-xs text-nav">{`Rob Moore © ${currentDate()}`}</p>
    </motion.footer>
  );
};

export default Footer;
