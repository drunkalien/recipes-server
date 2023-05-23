import { Router } from "express";

import * as recipeController from "../controllers/recipeController";

const router = Router();

router
  .route("/")
  .post(recipeController.createRecipe)
  .get(recipeController.getRecipes);
router
  .route("/:id")
  .get(recipeController.getRecipe)
  .put(recipeController.updateRecipe)
  .delete(recipeController.deleteRecipe);

export default router;
