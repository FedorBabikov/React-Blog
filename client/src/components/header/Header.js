import React from "react";
import "./header.css";
import AVATAR_URL from "../../constants.js";

export default function Header() {
  return (
    <nav>
      <div className="hdr-item-fst">
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-linkedin-in"></i>
      </div>
      <div className="hdr-item-sec">
        <ul>
          <li>Login</li>
          <li>Home</li>
          <li>Logout</li>
        </ul>
      </div>
      <div className="hdr-item-thd">
        <i className="fa-brands fa-searchengin"></i>
        <img src="AVATAR_URL" alt="random img" />
      </div>
    </nav>
  );
}
