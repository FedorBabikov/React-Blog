import React from "react";
import "./post.css";
import Sidebar from "../../components/sidebar/Sidebar.js";
import PostFull from "../../components/postFull/PostFull.js";

export default function Post() {
  return (
    <div className="post-wrapper">
      <PostFull />
      <Sidebar />
    </div>
  );
}
