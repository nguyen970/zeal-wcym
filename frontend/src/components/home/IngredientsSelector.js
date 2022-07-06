import * as React from 'react';
import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from "@material-ui/core/FormControlLabel"

const ingredientList = ["flour", "sugar", "salt", "butter", "milk"];

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
        <>        
            <h3>Ingredients on hand</h3>
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
        </>
    );
};