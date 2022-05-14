import React from "react";
import "./postCard.css";
import { POST_IMG_URL, DEFAULT_ALT } from "../../constants.js";

export default function PostCard() {
  return (
    <article className="postcard">
      <img src={POST_IMG_URL} alt={DEFAULT_ALT} />
      <section>
        <p className="postcard-title">
          Lorem ipsum dolor sit amet, consectetur adipisicing
        </p>
        <div className="postcard-cats">
          <i class="fa-solid fa-layer-group"></i>
          <span>React</span>
          <span>Axios</span>
        </div>
        <div className="postcard-date">
          <i class="fa-solid fa-clock-rotate-left"></i>2 days ago
        </div>
      </section>
    </article>
  );
}
