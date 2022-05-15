import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./App.css";

import Nav from "./components/nav/Nav.js";
import Header from "./components/header/Header.js";
import Sidebar from "./components/sidebar/Sidebar.js";
import Main from "./pages/main/Main.js";
import Post from "./pages/post/Post.js";
import Login from "./pages/login/Login.js";
import Create from "./pages/create/Create.js";

export default function App() {
  const { pathname } = useLocation();

  return (
    <>
      <Nav />
      {pathname === "/" ? <Header /> : null}
      <div className="wrapper">
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<Create />} />
        </Routes>
        {pathname !== "/login" && pathname !== "/create" ? <Sidebar /> : null}
      </div>
    </>
  );
}
