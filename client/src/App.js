import React from "react";
import Sidebar from "./components/sidebar/Sidebar.js";
import Nav from "./components/nav/Nav.js";
import Header from "./components/header/Header.js";
import Posts from "./components/posts/Posts.js";
import PostFull from "./components/postFull/PostFull.js";

import Create from "./pages/create/Create.js";
import "./App.css";

export default function App() {
  return (
    <>
      <Nav />
      <Header />
      <div className="wrapper">
        <Create />
        <Sidebar />
      </div>
    </>
  );
}
