import React from "react";
import "./post.css";
import Sidebar from "../../components/sidebar/Sidebar.js";
import Postfull from "../../components/postfull/Postfull.js";

export default function Post() {
  return (
    <div className="post-wrapper">
      <Postfull />
      <Sidebar />
    </div>
  );
}
