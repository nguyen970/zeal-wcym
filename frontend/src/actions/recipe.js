/* TODO: create recipe fetch actions, creators, and constants
  API: use /api/recipe/:id as a get request to fetch the recipe info
*/

export const GET_RECIPE = "GET_RECIPE";
export const RECEIVED_RECIPE = "RECEIVED_SEARCH";
export const FAILED_GET_RECIPE = "FAILED_GET_RECIPE";

const fetchingRecipe = () => ({
  type: GET_RECIPE,
})

const fetchedGetRecipe = (payload) => ({
  type: RECEIVED_RECIPE,
  payload,
})

const failedRecipe = (payload) => ({
  type: FAILED_GET_RECIPE,
  payload,
})

export const executeGetRecipe = async (id) => {
  const response = await fetch(`/api/recipe/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const results = await response.json();
  return results;
}

export const getRecipeById = (id) => {
  return async (dispatch) => {
    dispatch(fetchingRecipe())
    return executeGetRecipe(id)
      .then((res) => dispatch(fetchedGetRecipe(res)))
      .catch((err) => dispatch(failedRecipe(err)))
  }
}