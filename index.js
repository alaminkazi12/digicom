import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import helmet from "helmet";
import morgan from "morgan";
import connectDB from "./config/connectDB.js";
import userRouter from "./route/user.route.js";

const app = express();

app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL, // Ensure the correct env variable name
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev")); // Added format
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

const PORT = process.env.PORT || 8080; // Fixed PORT assignment

app.get("/", (request, response) => {
  response.json({
    message: "Server is running",
  });
});

app.use("api/user", userRouter);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on", PORT);
  });
});
