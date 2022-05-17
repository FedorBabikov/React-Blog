import React from "react";
import "./posts.css";
import Postcard from "../postCard/PostCard.js";

export default function Posts({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <Postcard post={post} key={post.id} />
      ))}
    </main>
  );
}
