import express from "express";
import "dotenv/config";

const app = express();

app.get("/", (req, res) => {
  res.send("HELLO");
});

app.listen(process.env.PORT, () => {
  console.log(`Server Listening on Port ${process.env.PORT}`);
});
