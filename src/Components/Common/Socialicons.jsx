import React from "react";
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTiktok, FaTwitter } from 'react-icons/fa'
const SocialIcons = () => {
  return (
    <div>
      <div className="icons flex gap-x-2">
        {[FaFacebookSquare, FaInstagram, FaLinkedin, FaTiktok, FaTwitter].map((Icon, idx) => (
          <span key={idx} className="hover:opacity-45 cursor-pointer">
            <Icon />
          </span>
        ))}
      </div>
    </div>
  );
};

export default SocialIcons;
