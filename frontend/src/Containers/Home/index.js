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
  const [recipeName, setTerm] = useState('');
  const [ingredients, setIngredients] = useState(['milk']);

  useEffect(() => {
    dispatch(searchRecipes(recipeName, ingredients));
  }, [recipeName, ingredients]);

  const handleRecipeSelected = (id) => {
    dispatch(getRecipeById(id));
  };
  
  return (
    <HomeWrapper>
      <FlexContainer>
        <SearchByName 
          onChange={(value) => setTerm(value)}
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
