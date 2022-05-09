import { useRouter } from "next/router";
import React from "react";
import { FaDiscord, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FacebookShareButton, TwitterShareButton } from "react-share";

const SocialIcons = () => {
  const router = useRouter()
  return (
    <>
      <button onClick={() => router.push("https://www.facebook.com/profile.php?id=100081015105343")}>
        <FaFacebook className="transition duration-300 transform hover:scale-110" />
      </button>
      <button onClick={() => router.push("https://twitter.com/robmooredev")}>
        <FaTwitter className="transition duration-300 transform hover:scale-110" />
      </button>
      <button onClick={() => router.push("https://discord.gg/programming")}>
        <FaDiscord className="transition duration-300 transform hover:scale-110" />
      </button>
    </>
  );
};

export default SocialIcons;
