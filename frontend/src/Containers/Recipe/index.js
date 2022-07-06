import * as React from 'react';
import { useSelector } from 'react-redux';
import { LinearProgress } from '@material-ui/core';
import styled from "styled-components"
import Ingredients from '../../components/recipe/Ingredients';

const StyledContainer = styled.div`
    padding: 3rem;
`
const InstructionsWrapper = styled.div`
    padding: 3rem 0;
`

export default function Recipe() {
    const  {recipe, isLoading} = useSelector((state) => state.recipe );
    console.log(recipe);
    return (
        <StyledContainer>
            {isLoading && <LinearProgress />}
            {recipe && 
                <>
                    <h4>{recipe[0].name}</h4>  
                    <Ingredients ingredients={recipe[0].ingredients}/>
                    <InstructionsWrapper>{recipe[0].instructions}</InstructionsWrapper>
                </>
            }
            {!recipe && !isLoading && <div>Please select a recipe to get started!</div>}
        </StyledContainer>
    )
}