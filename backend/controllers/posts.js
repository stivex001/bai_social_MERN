import { db } from "../db/connect.js";
import jwt from "jsonwebtoken";

export const getPosts = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(403).json("Not Authorized");

  jwt.verify(token, "mysecret", (err, userInfo) => {
    if (err) return res.status(403).json("Invalid Token");

    const q = `SELECT p.*, u.id AS userId, name, profilePicture FROM posts AS p JOIN users AS u ON (u.id = p.userId) 
     LEFT JOIN relationships AS r ON (p.userId = r.followedUserid ) WHERE r.followerUserid = ? OR p.userId = ?`;

    db.query(q, [userInfo.id, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  });
};
