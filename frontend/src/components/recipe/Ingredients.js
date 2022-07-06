import * as React from 'react';

export default function Ingredients(props) {
    const {ingredients} = props;
    return (
        <>
            <h4>Ingredients required: </h4>
            {ingredients?.map((ingredient) => 
                <div key={ingredient._id}>• {ingredient.amount} {ingredient.unit} of {ingredient.name}</div>
            )}
        </>
    )
}