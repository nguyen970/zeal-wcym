import * as React from 'react';
import { useSelector } from 'react-redux';
import { LinearProgress, List, ListItem, ListItemText } from '@material-ui/core';

export default function RecipesList(props) {
    const {onClick} = props;
    const {recipes, isLoading} = useSelector((state) => state.search);
    return (
        <>
        {recipes && (
            <List>
                {recipes.map((recipe) => (
                    <ListItem key={recipe.id} button onClick={() => onClick(recipe.id)}>
                        <ListItemText primary={recipe.name} />
                    </ListItem>
                ))}
            </List>
        )}
        {isLoading && <LinearProgress />}
        </>
    );
}