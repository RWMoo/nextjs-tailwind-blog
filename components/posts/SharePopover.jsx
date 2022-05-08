import React, { useRef, useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaReddit,
  FaShare,
  FaTwitter,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import {
  FacebookShareButton,
  InstapaperShareButton,
  PinterestShareButton,
  RedditShareButton,
  TwitterShareButton,
} from "react-share";
import { fadeInOut } from "../../utils/animations";

const SharePopover = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>
        <FaShare className="text-title text-blue-400" />
      </button>

      <Dialog
        className="relative z-50"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <AnimatePresence exitBeforeEnter>
          {isOpen && (
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={fadeInOut}
              className="fixed inset-0 flex items-center justify-center p-5"
            >
              <div className="bg-secondary opacity-80 w-screen h-screen fixed top-0 z-10" />
              <Dialog.Panel className="w-full max-w-sm rounded bg-primary p-4 z-20  border border-accent">
                <Dialog.Title className={"text-body font-display text-lg"}>
                  Share this post
                </Dialog.Title>
                <Dialog.Description>
                  <div className="flex space-x-4 text-primary text-xl mt-4">
                    <FacebookShareButton>
                      <FaFacebook className="transition duration-300 hover:text-accent" />
                    </FacebookShareButton>
                    <InstapaperShareButton>
                      <FaInstagram className="transition duration-300 hover:text-accent" />
                    </InstapaperShareButton>
                    <PinterestShareButton>
                      <FaPinterest className="transition duration-300 hover:text-accent" />
                    </PinterestShareButton>
                    <RedditShareButton>
                      <FaReddit className="transition duration-300 hover:text-accent" />
                    </RedditShareButton>
                    <TwitterShareButton
                      url="https://github.com/"
                      size={32}
                      round={true}
                    >
                      <FaTwitter className="transition duration-300 hover:text-accent" />
                    </TwitterShareButton>
                  </div>
                </Dialog.Description>
              </Dialog.Panel>
            </motion.div>
          )}
        </AnimatePresence>
      </Dialog>
    </>
  );
};

export default SharePopover;
