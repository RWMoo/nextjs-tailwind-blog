import React from "react";
import { FaDiscord, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <>
      <FaFacebook className="transition duration-300 transform hover:scale-110 text-nav" />
      <FaInstagram className="transition duration-300 transform hover:scale-110 text-nav" />
      <FaTwitter className="transition duration-300 transform hover:scale-110 text-nav" />
      <FaDiscord className="transition duration-300 transform hover:scale-110 text-nav" />
    </>
  );
};

export default SocialIcons;
