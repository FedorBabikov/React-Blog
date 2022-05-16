import express from "express";
import data from "../data.js";

const router = express.Router();

router.post("/", (req, res) => {
  const foundUser = data.users.find((user) => {
    return user.name === req.body.name && user.password === req.body.password;
  });

  !foundUser
    ? res.status(401).json({ msg: "Wrong name and/or password" })
    : res.status(200).json({
        msg: `Welcome, ${foundUser.name}! You have successfully logged in`,
      });
});

export default router;
