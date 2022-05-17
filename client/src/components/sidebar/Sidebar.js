import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PostsContext from "../../PostsContext.js";

import "./sidebar.css";
import { AVATAR_URL, DEFAULT_IMG_ALT } from "../../constants.js";

export default function Sidebar() {
  const { postsContext } = useContext(PostsContext);

  return (
    <aside className="sidebar">
      <section>
        <span>ABOUT ME</span>
        <img src={AVATAR_URL} alt={DEFAULT_IMG_ALT} />
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
          {postsContext.categories &&
            postsContext.categories.map((category, index) => (
              <Link
                to={`category/${category.toLowerCase()}`}
                className="link"
                key={index}
              >
                <li>{category}</li>
              </Link>
            ))}
        </ul>
      </section>
    </aside>
  );
}
