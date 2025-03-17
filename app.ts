import express from "express";
import "dotenv/config";
import cors from "cors";
import { postRouter } from "./routes/postsRouter.js";

const app = express();

app.options("*", cors());

app.get("/", (req, res) => {
  res.json("HELLO");
});

app.get("/posts", postRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server Listening on Port ${process.env.PORT}`);
});
