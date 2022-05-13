import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaCodepen } from "react-icons/fa";

function Links() {
  return (
    <ul className="social-links">
      <li>
        <FaGithub />
      </li>
      <li>
        <FaCodepen />
      </li>
      <li>
        <FaFacebook />
      </li>
      <li>
        <FaLinkedin />
      </li>
    </ul>
  );
}

export default Links;
