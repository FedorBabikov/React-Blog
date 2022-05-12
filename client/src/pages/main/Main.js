import React from "react";
import "./main.css";
import Header from "../../components/header/Header.js";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";

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
