// npm i core-js regenerator-runtime for babel / translating to older version
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import recipeView from './views/recipeView.js';
import * as model from './model.js';
const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
console.log('HAHA');

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    recipeView.renderSpinner();

    //1) loading recipe
    await model.loadRecipe(id);
    //2 ) rendering recipe

    recipeView.render(model.state.recipe);
  } catch (err) {
    throw new Error(err);
  }
};
['hasChange', 'load'].forEach(e => window.addEventListener(e, controlRecipes));
