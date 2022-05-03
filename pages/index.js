import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInOut, fadeInOutDown } from "../utils/animations";
import { useRouter } from "next/router";
import PageLayout from "../components/layouts/PageLayout";
import {
  FaChevronCircleDown,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaDiscord,
} from "react-icons/fa";

const Home = () => {
  const router = useRouter();
  const [navigate, setNavigate] = useState(false);

  const onNavigate = () => {
    setNavigate(true);
    router.push("/blog");
  };

  return (
    <PageLayout>
      <div className="flex h-full flex-col justify-around items-center text-center">
        <motion.div
          variants={fadeInOut}
          animate={navigate ? "exit" : "animate"}
        >
          <h1 className="font-title text-7xl font-bold">Rm</h1>
          <p className="mt-2 text-3xl font-bold font-display max-w-xs mx-auto">
            Hey, I&apos;m Rob.
          </p>
          <p className="text-sm mt-4 font-display max-w-xs mx-auto">
            I&apos;m a front-end developer that dabbles with back-end from time
            to time.
          </p>
        </motion.div>
        <motion.button
          onClick={onNavigate}
          variants={fadeInOutDown}
          animate={navigate ? "exit" : "animate"}
          className=" mx-auto text-5xl p-3 "
        >
          <FaChevronCircleDown className="rounded-full border-4 transition duration-400 transform hover:scale-125" />
        </motion.button>
        <motion.div
          variants={fadeInOut}
          animate={navigate ? "exit" : "animate"}
          className="flex justify-center space-x-7 text-2xl mt-8"
        >
          <FaFacebook className="transition duration-400 transform hover:scale-110" />
          <FaInstagram className="transition duration-400 transform hover:scale-110" />
          <FaTwitter className="transition duration-400 transform hover:scale-110" />
          <FaDiscord className="transition duration-400 transform hover:scale-110" />
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Home;
