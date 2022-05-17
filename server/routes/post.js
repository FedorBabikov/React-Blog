import express from "express";
import data from "../data.js";
import { v4 as uuid } from "uuid";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ posts: data.posts, categories: data.categories });
});

router.get("/category/:cat", (req, res) => {
  const categoryPosts = data.posts.filter((post) => {
    const lcCategories = post.categories.map((cat) => cat.toLowerCase());
    return lcCategories.includes(req.params.cat);
  });

  res.status(200).json({ posts: categoryPosts, categories: data.categories });
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
      msg: "New post must include both Title and Contents fields both of which should be strings",
    });
  } else {
    const newPostId = uuid();

    data.posts.push({
      id: newPostId,
      image: process.env.POST_IMG_URL,
      created: new Date().toISOString().slice(0, 10),
      ...req.body,
    });

    res.status(201).json({ msg: `Post with id '${newPostId}' has been added` });
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
    const postToUpdate = data.posts.find((post) => post.id === req.params.id);

    if (req.body.title) {
      postToUpdate.title = req.body.title;
    }

    if (req.body.contents) {
      postToUpdate.contents = req.body.contents;
    }

    res
      .status(201)
      .json({ msg: `Post with id '${req.params.id}' has been updated` });
  }
});

router.delete("/:id", (req, res) => {
  const postToDelete = data.posts.find((post) => post.id === req.params.id);

  if (!postToDelete) {
    res.status(404).json({ msg: `Post with id '${req.params.id}' not found` });
  } else {
    data.posts = data.posts.filter((post) => post.id !== postToDelete.id);

    res
      .status(201)
      .json({ msg: `Post with id '${req.params.id}' has been deleted` });
  }
});

export default router;
