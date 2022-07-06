import * as React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LinearProgress } from '@material-ui/core';
import Ingredients from '../../components/recipe/Ingredients';
import { RecipeWrapper, InstructionsWrapper } from "./styles"
import {getRecipeById} from "../../actions"

export default function Recipe() {
    const dispatch = useDispatch();
    const  {recipe, isLoading} = useSelector((state) => state.recipe );

    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const id = params.get('id');
        if (id) {
            dispatch(getRecipeById(id));
        }
    },[]);

    useEffect(() => {
        if (recipe) {
            const params = new URLSearchParams(window.location.search)
            const id = params.get('id');
            let newUrl = '';
            if (id) {
                newUrl =  window.location.href.replace(`id=${id}`, `id=${recipe._id}`);
            } else {
                newUrl = window.location.href + `&id=${recipe._id}`;
            }
            window.history.pushState({}, '', newUrl);
        }
    }, [recipe]);

    return (
        <RecipeWrapper>
            {isLoading && <LinearProgress />}
            {recipe && 
                <>
                    <h4>{recipe.name}</h4>  
                    <Ingredients ingredients={recipe.ingredients}/>
                    <InstructionsWrapper>{recipe.instructions}</InstructionsWrapper>
                </>
            }
            {!recipe && !isLoading && <div>Please select a recipe to get started!</div>}
        </RecipeWrapper>
    )
}