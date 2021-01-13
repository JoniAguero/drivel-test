const { Recipe } = require("../models/recipes.model");
const fetch = require('node-fetch')

const CreateRecipe = async (req, res) => {
  const recipe = new Recipe(req.body);
  const uid = req.uid
  recipe.user = uid;
  try {
    if (!uid) {
      return res.status(401).json({
        ok: false,
        msg: "You do not have the privilege to add data",
      });
    }
    const recipeSaved = await recipe.save();
    res.json({
      ok: true,
      recipe: recipeSaved,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: error,
    });
  }
};

const DeleteRecipe = async (req, res = response) => {
  const uid = req.uid;
  const role = req.header("x-role")

  try {
    const recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
      return res.status(404).json({
        ok: false,
        msg: "Recipe does not exist for that id",
      });
    }

    if (!uid && role !== 'admin') {
      return res.status(401).json({
        ok: false,
        msg: "You do not have the privilege to delete data",
      });
    }

    await Recipe.findByIdAndDelete(req.params.id);

    res.json({ ok: true });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Please talk to the administrator",
    });
  }
};

const GetRecipesApi = async (req, res) => {
  try {
    const apiResponse = await fetch(
      'http://www.recipepuppy.com/api/'
    )
    const apiResponseJson = await apiResponse.json()
    res.json({
      ok: true,
      recipes: apiResponseJson,
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      msg: "Something went wrong",
    });
  }
};

const GetRecipesFav = async (req, res) => {
  const uid = req.uid;
  const role = req.header("x-role")
  const search = req.query.search;
  try {
    if(role === '"admin"') {
      const query = search ? { ingredients: { $regex: search, $options: "i" }} : null;
      Recipe.find(query, (err, recipes) => {
        if (err) return res.status(400).send(err)
        res.status(200).send({
          ok: true,
          recipes,
        })
      })
    } else {
      Recipe.find({ user: uid }, (err, recipes) => {
        if (err) return res.status(400).send(err)
        res.status(200).send({
          ok: true,
          recipes,
        })
      })
    }
  } catch (err) {
    res.status(500).json({
      ok: false,
      msg: "Something went wrong",
    });
  }
};

module.exports = {
  CreateRecipe,
  DeleteRecipe,
  GetRecipesApi,
  GetRecipesFav
};
