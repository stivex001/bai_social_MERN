import express  from "express";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import commentRoutes from "./routes/comments.js";
import likesRoutes from "./routes/likes.js";
import postRoutes from "./routes/posts.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use("/api/v1/users", userRoutes);
// app.use("/api/v1/comments", commentRoutes);
// app.use("/api/v1/posts", postRoutes);
// app.use("/api/v1/likes", likesRoutes);
app.use("/api/v1/auth", authRoutes);

const port = process.env.PORT || 5000;

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`server succesfully running on ${port}`);
});
