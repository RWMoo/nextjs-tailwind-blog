import Link from "next/link";
import { currentDate } from "../../utils";
import { links } from "../../utils/links";
import SocialIcons from "../global/SocialIcons";
import { motion } from "framer-motion";
import { fadeInOut } from "../../utils/animations";

const Footer = () => {
  return (
    <motion.footer variants={fadeInOut} initial="initial" animate="animate" transition={{delay: 0.2}} className="text-center space-y-8 lg:space-y-12 xl:space-y- py-10 lg:py-20 mt-8 md:mt-12 lg:mt-16 xl:mt-24 bg-nav">
      <Link href={"/"} passHref>
        <button className="font-title text-4xl xl:text-5xl font-bold text-nav">
          Rm
        </button>
      </Link>
      <div className="flex flex-col md:flex-row justify-center text-nav  items-center space-y-4 md:space-y-0 md:space-x-12 text-sm lg:text-base font-semibold font-display">
        {links.slice(1).map(({ name, link }) => {
          return (
            <Link key={link} href={link} passHref>
              <a
                className={`text-center font-normal font-display transition transform hover:scale-110`}
              >
                {name}
              </a>
            </Link>
          );
        })}
      </div>
      <div className="flex justify-center space-x-8 text-xl lg:text-2xl text-contrast">
        <SocialIcons />
      </div>
      <p className="text-xs xl:text-sm text-nav">{`Rob Moore © ${currentDate()}`}</p>
    </motion.footer>
  );
};

export default Footer;
