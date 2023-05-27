import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import recipeRouter from "./routes/recipeRouter";
import imageAuthRouter from "./routes/imageAuthRouter";

export const app = express();

dotenv.config();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: "*",
  })
);
app.use(express.json());

app.use("/recipes", recipeRouter);
app.use("/image-auth", imageAuthRouter);
