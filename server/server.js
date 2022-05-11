import express from "express";
import cors from "cors";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());

app.get("/api", (req, res) => {
  res.json({ message: "Hello from Express server!" });
});

app.listen(PORT, () => {
  console.log(`Express server is running on port ${PORT}`);
});
