import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import recipeRouter from "./routes/recipeRouter";

export const app = express();

dotenv.config();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/recipes", recipeRouter);
