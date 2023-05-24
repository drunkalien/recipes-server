import mongoose from "mongoose";

import { app } from "./app";

app.listen(5000, () => console.log("app is running"));

const DB = process.env.MONGO_URL || "mongodb://localhost:27017/recipe-app";

mongoose
  .connect(DB, {})
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));
