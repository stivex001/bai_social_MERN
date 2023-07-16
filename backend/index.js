import express from "express";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import commentRoutes from "./routes/comments.js";
import likesRoutes from "./routes/likes.js";
import postRoutes from "./routes/posts.js";

const app = express();

// Routes

app.use("/api/v1/users", userRoutes);
// app.use("/api/v1/comments", commentRoutes);
// app.use("/api/v1/posts", postRoutes);
// app.use("/api/v1/likes", likesRoutes);
app.use("/api/v1/auth", authRoutes);

app.listen(8080, () => {
  try {
    console.log("connected to port 8080");
  } catch (error) {
    if (error) throw error;
  }
});
