import express from "express";
import cors from "cors";
import "dotenv/config.js";

import data from "./data.js";
import authRoute from "./routes/auth.js";
import postRoute from "./routes/post.js";

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/login", authRoute);
app.use("/posts", postRoute);

app.listen(PORT, () => {
  console.log(`Express server is running on local port ${PORT}...`);
  console.log("\nUse any of these users to log in: ", data.users);
});
