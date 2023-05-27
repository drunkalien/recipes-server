import mongoose from "mongoose";

export interface IRecipe extends mongoose.Document {
  name: string;
  ingredients: { name: string }[];
  description: string;
  image: string;
  cookingTime: {
    time: number;
    unit: string;
  };
}

const IngredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const RecipeSchema = new mongoose.Schema<IRecipe>({
  name: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [IngredientSchema],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  cookingTime: {
    type: Object,
    required: true,
  },
});

export default mongoose.model("Recipe", RecipeSchema);
