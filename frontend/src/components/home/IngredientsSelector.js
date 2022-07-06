import * as React from 'react';
import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import styled from "styled-components"

const ingredientList = ["flour", "sugar", "salt", "butter", "milk"];
const StyledContainer = styled.div`
  margin-left: 3rem;
  display: flex;
  justify-content: space-between;
  min-width: 40rem;
  flex: none;
`
const StyledH3 = styled.h3`
    margin-right: 3rem;
`;

export default function IngredientsSelector(props) {
    const {ingredients, onChange} = props;
    const handleOnChange = (ingredient, checked) => {
        if (checked) {
            onChange([...ingredients, ingredient]);
        } else {
          const updatedIngredients = [...ingredients];
          updatedIngredients.splice(ingredients.indexOf(ingredient), 1);
          onChange(updatedIngredients);
        }
      }
    return (
        <StyledContainer>        
            <StyledH3>Ingredients on hand</StyledH3>
            {ingredientList.map((ingredient) => (
            <FormControlLabel
                key={ingredient}
                control={
                <Checkbox
                    checked={ingredients.includes(ingredient)}
                    onChange={(event) => handleOnChange(ingredient, event.target.checked)}
                    value={ingredient}
                />
                }
                label={ingredient}
            />
            ))}
        </StyledContainer>
    );
};