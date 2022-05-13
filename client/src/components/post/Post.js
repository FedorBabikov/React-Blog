import React from "react";
import "./post.css";
import { POST_IMG_URL, DEFAULT_ALT } from "../../constants.js";

export default function Post() {
  return (
    <article className="post">
      <img src={POST_IMG_URL} alt={DEFAULT_ALT} />
      <section>
        <p className="post-title">
          Lorem ipsum dolor sit amet, consectetur adipisicing
        </p>
        <div className="post-cats">
          <i class="fa-solid fa-layer-group"></i>
          <span>React</span>
          <span>Axios</span>
        </div>
        <span className="post-date">
          <i class="fa-solid fa-clock-rotate-left"></i>2 days ago
        </span>
      </section>
    </article>
  );
}
