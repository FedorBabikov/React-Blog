import React from "react";

import "./postFull.css";
import { DEFAULT_IMG_ALT } from "../../constants.js";

export default function PostFull({ post }) {
  return (
    <main className="post-content">
      <img src={post.image} alt={DEFAULT_IMG_ALT} />
      <div className="title">
        <h1>{post.title}</h1>
        <div className="post-icons">
          <div className="post-icons-inner">
            <i className="fa-solid fa-square-pen"></i>
            <i className="fa-solid fa-trash-can"></i>
          </div>
        </div>
      </div>
      <section className="post-stat">
        <span>
          Author: <b>John</b>
        </span>
        <span>Time</span>
      </section>
      <section className="post-text">{post.contents}</section>
    </main>
  );
}
