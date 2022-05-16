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
  if (
    !(req.body.title && req.body.contents) ||
    !(
      typeof req.body.title === "string" &&
      typeof req.body.contents === "string"
    )
  ) {
    res.status(400).json({
      msg: "New post must include Title and Contents fields both of which should be strings",
    });
  } else {
    const currentId = uuid();

    data.posts.push({
      id: currentId,
      image: process.env.POST_IMG_URL,
      ...req.body,
    });

    res.status(201).json({ msg: `Post with id '${currentId}' has been added` });
  }
});

router.put("/:id", (req, res) => {
  if (
    (!req.body.title || typeof req.body.title !== "string") &&
    (!req.body.contents || typeof req.body.contents !== "string")
  ) {
    res.status(400).json({
      msg: "Post update must include either Title or Contents field or both, and they should be strings",
    });
  } else {
    const postToUpdate = data.posts.find((post) => {
      return post.id === req.params.id;
    });

    if (req.body.title) {
      postToUpdate.title = req.body.title;
    }

    if (req.body.contents) {
      postToUpdate.contents = req.body.contents;
    }

    res
      .status(200)
      .json({ msg: `Post with id '${req.params.id}' has been updated` });
  }
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
