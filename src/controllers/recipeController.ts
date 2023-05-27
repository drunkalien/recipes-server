import { Request, Response } from "express";

import Recipe from "../models/Recipe";

async function getRecipes(req: Request, res: Response) {
  try {
    const recipes = await Recipe.find();

    res.json(recipes);
  } catch (error) {
    res.json(error);
  }
}

async function getRecipe(req: Request, res: Response) {
  try {
    const recipe = await Recipe.findById(req.params.id);
    res.json(recipe);
  } catch (error) {
    res.json(error);
  }
}

async function createRecipe(req: Request, res: Response) {
  try {
    const recipe = await Recipe.create(req.body);
    res.json(recipe);
  } catch (error) {
    res.json(error);
  }
}

async function updateRecipe(req: Request, res: Response) {
  try {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(recipe);
  } catch (error) {
    res.json(error);
  }
}

async function deleteRecipe(req: Request, res: Response) {
  try {
    await Recipe.findByIdAndRemove(req.params.id);
    res.json({ message: "Recipe deleted" });
  } catch (error) {
    res.json(error);
  }
}

export { getRecipes, getRecipe, createRecipe, updateRecipe, deleteRecipe };
