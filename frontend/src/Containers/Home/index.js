import * as React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { FlexContainer, HomeWrapper } from "./styles"
import Divider from "@material-ui/core/Divider"
import {getRecipeById, searchRecipes} from "../../actions"
import SearchByName from "../../components/home/SearchByName"
import IngredientsSelector from '../../components/home/IngredientsSelector';
import Recipe from '../Recipe';
import RecipesList from '../../components/home/RecipesLIst';

export default function Home(recipes, isLoading) {
  const dispatch = useDispatch();
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState(['milk']);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const ingredientsFromParams = params.get('ingredients');
    const recipeNameFromParams = params.get('name');
    setRecipeName(recipeNameFromParams || '');
    setIngredients(ingredientsFromParams?.split(',') || []);
  },[]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const id = params.get('id');
    let newUrl = window.location.origin + '?';

    if (id) {
      newUrl += `id=${id}${ingredients.length || recipeName ? '&' : ''}`;
    }
    if (ingredients.length) {
      newUrl += `ingredients=${ingredients}${recipeName ? '&' : ''}`;
    }
    if (recipeName) {
      newUrl += `name=${recipeName}`;
    }

    dispatch(searchRecipes(recipeName, ingredients));
    window.history.pushState({}, '', newUrl);
  }, [recipeName, ingredients]);

  const handleRecipeSelected = (id) => {
    dispatch(getRecipeById(id));
  };
  
  return (
    <HomeWrapper>
      <FlexContainer>
        <SearchByName 
          onChange={(value) => setRecipeName(value)}
          name={recipeName}
        />
        <IngredientsSelector 
          ingredients={ingredients}
          onChange={(updatedIngredients) => setIngredients(updatedIngredients)}
        />
      </FlexContainer>
      <Divider />
      <FlexContainer>
        <RecipesList onClick={handleRecipeSelected}/>
        <Recipe/>
      </FlexContainer>
    </HomeWrapper>
  )
}
