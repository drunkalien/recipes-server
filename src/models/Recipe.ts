import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Recipe", RecipeSchema);
