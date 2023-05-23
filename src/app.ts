import express from "express";
import cors from "cors";

import recipeRouter from "./routes/recipeRouter";

export const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/recipes", recipeRouter);
