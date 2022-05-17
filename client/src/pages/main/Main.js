import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PostsContext from "../../PostsContext.js";

import "./main.css";
import Posts from "../../components/posts/Posts.js";

export default function Main() {
  const { pathname } = useLocation();
  const { setPostsContext } = useContext(PostsContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios({
        url: `http://localhost:5000/posts${pathname}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      setPostsContext(data);
      setPosts(data.posts);
    })();
  }, [pathname]);

  return (
    <>
      <Posts posts={posts} />
    </>
  );
}
