import { db } from "../db/connect.js";
import jwt from "jsonwebtoken";

export const getRelationships = (req, res) => {
  const { followedUserId } = req.query;

  const q = `SELECT followerUserId FROM relationships WHERE followedUserId = ?  `;

  db.query(q, [followedUserId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data.map((relationship) => relationship.followerUserId));
  });
};

export const addRelationships = (req, res) => {
  const token = req.cookies.access_token;
  const { userId } = req.body;

  if (!token) return res.status(403).json("Not Authorized");

  jwt.verify(token, "mysecret", (err, userInfo) => {
    if (err) return res.status(403).json("Invalid Token");

    const q = "INSERT INTO relationships (`followerUserId`, `followedUserId`) VALUES (?)";

    const values = [userInfo.id, userId];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Following");
    });
  });
};

export const deleteRelationships = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "mysecret", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q = "DELETE FROM relationships WHERE `followerUserId` = ? AND `followedUserId` = ?";

    db.query(q, [userInfo.id, req.query.userId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Unfollow");
    });
  });
};
