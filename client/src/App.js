import React from "react";
import Sidebar from "./components/sidebar/Sidebar.js";
import Nav from "./components/nav/Nav.js";
import Login from "./pages/login/Login.js";

import "./App.css";

export default function App() {
  return (
    <>
      <Nav />
      <div className="wrapper">
        <Login />
        <Sidebar />
      </div>
    </>
  );
}
