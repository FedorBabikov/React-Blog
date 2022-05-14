import React from "react";
import "./main.css";
import Header from "../../components/header/Header.js";
import Posts from "../../components/posts/Posts.js";
import Sidebar from "../../components/sidebar/Sidebar.js";

export default function Main() {
  return (
    <>
      <Header />
      <div className="main-wrapper">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}
