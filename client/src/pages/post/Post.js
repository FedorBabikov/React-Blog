import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import "./post.css";
import PostFull from "../../components/postFull/PostFull.js";

export default function Post() {
  const { pathname } = useLocation();
  const postId = pathname.split("/")[2];

  const [post, setPost] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios({
        url: `http://localhost:5000/posts/${postId}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      setPost(res.data);
    })();
  }, [postId]);

  return (
    <>
      <PostFull post={post} />
    </>
  );
}
