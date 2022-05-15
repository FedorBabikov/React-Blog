import React from "react";
import "./sidebar.css";
import { AVATAR_URL, DEFAULT_ALT } from "../../constants";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <section>
        <span>ABOUT ME</span>
        <img src={AVATAR_URL} alt={DEFAULT_ALT} />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum ea
          neque quam quae laudantium commodi tempore voluptates itaque, quaerat
          rem vitae a.
        </p>
      </section>
      <section>
        <span>
          <i className="fa-solid fa-layer-group"></i>
          CATEGORIES
        </span>
        <ul>
          <li>Express</li>
          <li>Axios</li>
          <li>React</li>
          <li>CSS</li>
          <li>Javascript</li>
        </ul>
      </section>
    </aside>
  );
}
