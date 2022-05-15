import React from "react";
import { Link } from "react-router-dom";

import "./postCard.css";
import { POST_IMG_URL, DEFAULT_ALT } from "../../constants.js";

export default function PostCard() {
  return (
    <article className="postcard">
      <Link to="/post/1" className="link">
        <img src={POST_IMG_URL} alt={DEFAULT_ALT} />
      </Link>
      <section>
        <Link to="/post/1" className="link">
          <p className="postcard-title">
            Lorem ipsum dolor sit amet, consectetur adipisicing
          </p>
        </Link>
        <div className="postcard-cats">
          <i className="fa-solid fa-layer-group"></i>
          <span>React</span>
          <span>Axios</span>
        </div>
        <div className="postcard-date">
          <i className="fa-solid fa-clock-rotate-left"></i>2 days ago
        </div>
      </section>
    </article>
  );
}
