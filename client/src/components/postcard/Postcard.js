import React from "react";
import { Link } from "react-router-dom";

import "./postCard.css";
import { DEFAULT_IMG_ALT } from "../../constants.js";

export default function PostCard({ post }) {
  return (
    <article className="postcard">
      <Link to={`/post/${post.id}`} className="link">
        <img src={post.image} alt={DEFAULT_IMG_ALT} />
      </Link>
      <section>
        <Link to={`/post/${post.id}`} className="link">
          <p className="postcard-title">{post.title}</p>
        </Link>
        <div className="postcard-cats">
          <i className="fa-solid fa-layer-group"></i>
          <span>React</span>
          <span>Axios</span>
        </div>
        <div className="postcard-date">
          <i className="fa-solid fa-clock-rotate-left"></i>
          {post.created}
        </div>
      </section>
    </article>
  );
}
