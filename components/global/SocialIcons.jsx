import React from "react";
import { FaDiscord, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <>
      <FaFacebook className="transition duration-300 transform hover:scale-110 text-contrast" />
      <FaInstagram className="transition duration-300 transform hover:scale-110 text-contrast" />
      <FaTwitter className="transition duration-300 transform hover:scale-110 text-contrast" />
      <FaDiscord className="transition duration-300 transform hover:scale-110 text-contrast" />
    </>
  );
};

export default SocialIcons;
