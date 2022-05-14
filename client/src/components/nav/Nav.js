import React from "react";
import "./nav.css";
import {
  AVATAR_URL,
  TWITTER_URL,
  FACEBOOK_URL,
  LINKEDIN_URL,
  DEFAULT_ALT,
} from "../../constants.js";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-item-fst">
        <a href={TWITTER_URL} rel="noreferrer" target={"_blank"}>
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href={FACEBOOK_URL} rel="noreferrer" target={"_blank"}>
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href={LINKEDIN_URL} rel="noreferrer" target={"_blank"}>
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
      </div>
      <div className="nav-item-sec">
        <ul>
          <li>Login</li>
          <li>Home</li>
          <li>Create</li>
        </ul>
      </div>
      <div className="nav-item-thd">
        <i className="fa-brands fa-searchengin"></i>
        <img src={`${AVATAR_URL}`} alt={DEFAULT_ALT} />
      </div>
    </nav>
  );
}
