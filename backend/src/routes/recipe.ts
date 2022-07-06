import { RecipeModel, Ingredient } from "../models";
import { Request, Response, NextFunction } from "express";

type Recipe = {
  name: string;
  ingredients: Ingredient;
  instructions: string;
}

export const recipeMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const foundRecipe = await RecipeModel.findOne({_id: req.params.id});
  res.send(foundRecipe);
}
