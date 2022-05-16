import express from "express";
import { v4 as uuid } from "uuid";
import data from "../data.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json(data.posts);
});

router.get("/:id", (req, res) => {
  const foundPost = data.posts.find((post) => {
    return post.id === req.params.id;
  });

  !foundPost
    ? res.status(404).json({ msg: "Post not found" })
    : res.status(200).json(foundPost);
});

router.post("/", (req, res) => {
  const currentId = uuid();

  data.posts.push({
    id: currentId,
    ...req.body,
  });

  res.status(201).json({ msg: `Post with id '${currentId}' has been added` });
});

router.delete("/:id", (req, res) => {
  const foundPost = data.posts.find((post) => {
    return post.id === req.params.id;
  });

  if (foundPost) {
    data.posts = data.posts.filter((post) => post.id !== foundPost.id);
    res
      .status(200)
      .json({ msg: `Post with id '${req.params.id}' has been deleted` });
  } else {
    res.status(404).json({ msg: `Post with id '${req.params.id}' not found` });
  }
});

export default router;
