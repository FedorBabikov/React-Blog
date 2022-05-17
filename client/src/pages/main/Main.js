import React, { useState, useEffect } from "react";
import axios from "axios";

import "./main.css";
import Posts from "../../components/posts/Posts.js";

export default function Main() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios({
        url: "http://localhost:5000/posts",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      setPosts(data.posts);
    })();
  }, []);

  return (
    <>
      <Posts posts={posts} />
    </>
  );
}
