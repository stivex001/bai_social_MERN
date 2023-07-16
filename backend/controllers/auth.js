import { db } from "../db/connect.js";

export const register = async (req, res) => {
  try {
    // check if user exists

    const q = "SELECT FROM users WHERE username = ?";

    db.query(q, [req.body.username], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length) return res.status(409).json("User already exists")
    });
    
  } catch (error) {}
};

export const login = async (req, res) => {
  try {
  } catch (error) {}
};

export const logout = async (req, res) => {
  try {
  } catch (error) {}
};
