import express, { Response, Request, NextFunction } from "express";
import "dotenv/config";
import cors from "cors";
import { postRouter } from "./routes/postsRouter.js";
import { commentRouter } from "./routes/commentsRouter.js";
import { userRouter } from "./routes/userRouter.js";

const app = express();

app.options("*", cors());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "HELLO" });
});

app.get("/posts", postRouter);
app.get("/comments", commentRouter);
app.get("/users", userRouter);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
app.listen(process.env.PORT, () => {
  console.log(`Server Listening on Port ${process.env.PORT}`);
});
