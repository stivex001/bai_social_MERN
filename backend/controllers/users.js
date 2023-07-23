import { db } from "../db/connect.js";
import jwt from "jsonwebtoken";

export const getUser = (req, res) => {
  const userId = req.params.userId;

  const q = "SELECT * FROM users WHERE id = ?";

  db.query(q, [userId], (err, data) => {
    if (err) return res.status(500).json(err);

    const { password, ...info } = data[0];
    return res.status(200).json(info);
  });
};

export const updateUser = (req, res) => {
  const token = req.cookies.access_token;
  const { name, city, website, coverPic, profilePicture } = req.body;

  if (!token) return res.status(403).json("Not Authorized");

  jwt.verify(token, "mysecret", (err, userInfo) => {
    if (err) return res.status(403).json("Invalid Token");

    const q =
      "UPDATE users SET `name`=?,`city`=?,`website`=?,`profilePicture`=?,`coverPic`=? WHERE id=? ";
    const values = [name, city, website, profilePicture, coverPic, userInfo.id];
    db.query(q, values, (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.affectedRows > 0) return res.status(200).json("Updated");
      return res.status(403).json("You can only update only your profile");
    });
  });
};
