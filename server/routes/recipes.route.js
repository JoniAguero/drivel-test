
"use strict"

const { Router } = require("express")
const { check } = require("express-validator")
const { validarToken } = require("../middlewares/validate-token")
const { validateFields } = require("../middlewares/validate-fields")
const { validateAdmin } = require("../middlewares/validate-admin")
const { CreateRecipe, GetRecipesApi,  GetRecipesFav, DeleteRecipe } = require("../controllers/recipes.controller")

const recipeRoute = Router()

recipeRoute.get("/recipes", GetRecipesApi)
recipeRoute.get("/recipes/fav", validarToken, GetRecipesFav)

recipeRoute.post(
  "/recipes",
  [
    check("title", "The title is required").not().isEmpty(),
    check("href", "The link is required").not().isEmpty(),
    check("ingredients", "Ingredients are required").not().isEmpty(),
    validateFields,
  ],
  validarToken,
  validateAdmin,
  CreateRecipe
)

recipeRoute.delete("/recipes/:id", validarToken, DeleteRecipe)

module.exports = recipeRoute