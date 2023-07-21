import { db } from "../db/connect.js";
import jwt from "jsonwebtoken";

export const getLikes = (req, res) => {
  const { postId } = req.query;

  const q = `SELECT userId FROM likes WHERE postId = ?  `;

  db.query(q, [postId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data.map((like) => like.userId));
  });
};

export const addLike = (req, res) => {
  const token = req.cookies.access_token;
  const { postId } = req.body;

  if (!token) return res.status(403).json("Not Authorized");

  jwt.verify(token, "mysecret", (err, userInfo) => {
    if (err) return res.status(403).json("Invalid Token");

    const q = "INSERT INTO likes {`userId`, `postId`} VALUES=(?)";

    const values = [
      userInfo.id,
      postId,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Post has been liked");
    });
  });
};

export const deleteLike = (req, res) => {
  const token = req.cookies.access_token;
  const { postId } = req.body;

  if (!token) return res.status(403).json("Not Authorized");

  jwt.verify(token, "mysecret", (err, userInfo) => {
    if (err) return res.status(403).json("Invalid Token");

    const q = "DELETE FROM likes WHERE `userId` = ? AND `postId` =? ";

    const values = [
      userInfo.id,
      postId,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("post has been disliked");
    });
  });
};
