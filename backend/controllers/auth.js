import { db } from "../db/connect.js";
import bcrypt from "bcryptjs";

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

export const login = async (req, res) => {
  try {
  } catch (error) {}
};

export const logout = async (req, res) => {
  try {
  } catch (error) {}
};
