import { Request, Response } from "express";
import {
  createComment,
  deleteComment,
  getAllComments,
  getSpecificComment,
  updateComment,
} from "../db/queries.js";

export const getComments = async (req: Request, res: Response) => {
  const allComments = await getAllComments();

  res.json(allComments);
};

export const getCommentsId = async (req: Request, res: Response) => {
  const { commentid } = req.params;

  const comment = await getSpecificComment(Number(commentid));

  res.json(comment);
};

export const newComment = async (req: Request, res: Response) => {
  const { content } = req.body;
  const { postid } = req.params;

  const createdComment = await createComment(content, Number(postid));

  res.json({ message: "Comment created Sucessfully", comment: createdComment });
};

export const updateCommentController = async (req: Request, res: Response) => {
  const { commentid, postid } = req.params;
  const { content } = req.body;

  const updatedComment = await updateComment(
    Number(commentid),
    content,
    Number(postid)
  );

  res.json({
    message: "Comment Updated Successfully",
    comment: updatedComment,
  });
};

export const deleteCommentController = async (req: Request, res: Response) => {
  const { commentid } = req.params;

  await deleteComment(Number(commentid));

  res.json({ message: "Comment deleted successfully" });
};
