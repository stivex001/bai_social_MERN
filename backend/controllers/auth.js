import { db } from "../db/connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  // check if user exists

  const { email, name, username, password } = req.body;

  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exists");

    // create new user
    // hash password

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    const user =
      "INSERT INTO users (`username`, `email`, `password`, `name`) VALUE (?)";

    const values = [username, email, hashPassword, name];

    db.query(user, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(201).json("user has been created");
    });
  });
};

export const login = (req, res) => {
  const { username, password } = req.body;

  // check if the user exists
  const q = "SELECT * FROM users WHERE username = ?";
  db.query(q, [username], (err, data) => {
    if (err) return res.status(500).json(err);

    if (data.length === 0) return res.status(404).json("User not found");

    // validate the password
    const correctPassword = bcrypt.compareSync(password, data[0].password);

    if (!correctPassword)
      return res.status(400).json("Wrong password or username");

    const token = jwt.sign({ id: data[0].id }, "mysecret");

    const { password: _, ...others } = data[0];

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  });
};

export const logout = async (req, res) => {
  res
    .cookie("access_token", {
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json("User logged out successfully");
};
