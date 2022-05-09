import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInOut, fadeInOutDown } from "../utils/animations";
import { useRouter } from "next/router";
import PageLayout from "../components/layouts/PageLayout";
import { FaChevronCircleDown } from "react-icons/fa";
import { currentDate, url } from "../utils";
import SocialIcons from "../components/global/SocialIcons";
import { NextSeo } from "next-seo";

const Home = () => {
  const router = useRouter();
  const [navigate, setNavigate] = useState(false);

  const onNavigate = () => {
    setNavigate(true);
    setTimeout(() => {
      router.push("/blog");
    }, 500);
  };

  const title = `RM Dev Blog | ${currentDate}`
  const description = "Hey, I'm Rob. I'm a front-end developer that dabbles with back-end from time to time. I love finding and exploring new web technologies."
  const image = {
    url: "https://media.graphassets.com/RPNOKQgLSFK1xcrSAtld",
    alt: "rm blog social"
  }
  return (
    <PageLayout>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url: url,
          title: title,
          description: description,
          images: [
            {
              url: image.url,
              width: 800,
              height: 600,
              alt: image.alt,
              type: "image/jpeg",
            }
          ],
          site_name: title,
        }}
        twitter={{
          handle: '@robmooredev',
          site: '@robmooredev',
          cardType: 'summary_large_image'
        }}
      />
      <div className="h-full flex-grow flex flex-col justify-around items-center text-center">
        <motion.div
          variants={fadeInOut}
          animate={navigate ? "exit" : "animate"}
        >
          <h1 className="font-title text-7xl font-bold text-accent">Rm</h1>
          <p className="mt-2 text-3xl md:text-4xl xl:text-5xl font-bold font-display max-w-xs mx-auto text-primary lg:mt-8">
            Hey, I&apos;m Rob.
          </p>
          <p className="text-sm xl:text-lg mt-4 font-display max-w-xs xl:max-w-sm mx-auto text-body">
            I&apos;m a front-end developer that dabbles with back-end from time
            to time.
          </p>
        </motion.div>
        <motion.button
          onClick={onNavigate}
          variants={fadeInOutDown}
          animate={navigate ? "exit" : "animate"}
          className=" mx-auto text-5xl xl:text-6xl p-3"
        >
          <FaChevronCircleDown className="text-accent shadow rounded-full transition duration-400 transform hover:scale-125" />
        </motion.button>

        <motion.div
          variants={fadeInOut}
          animate={navigate ? "exit" : "animate"}
          className="space-y-6"
        >
          <div className="flex justify-center space-x-7 text-2xl mt-8 md:pb-8 text-contrast">
            <SocialIcons />
          </div>
          <p className="text-xs text-body">{`Rob Moore © ${currentDate()}`}</p>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Home;

/*

*/
