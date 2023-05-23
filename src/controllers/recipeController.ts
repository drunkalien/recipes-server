import { Request, Response } from "express";

import Recipe from "../models/Recipe";

async function getRecipes(req: Request, res: Response) {
  const recipes = await Recipe.find();

  res.json(recipes);
}

async function getRecipe(req: Request, res: Response) {
  const recipe = await Recipe.findById(req.params.id);
  res.json(recipe);
}

async function createRecipe(req: Request, res: Response) {
  const recipe = await Recipe.create(req.body);
  res.json(recipe);
}

async function updateRecipe(req: Request, res: Response) {
  const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(recipe);
}

async function deleteRecipe(req: Request, res: Response) {
  await Recipe.findByIdAndRemove(req.params.id);
  res.json({ message: "Recipe deleted" });
}

export { getRecipes, getRecipe, createRecipe, updateRecipe, deleteRecipe };
