import * as React from 'react';
import { useSelector } from 'react-redux';
import { LinearProgress, List, ListItem, ListItemText } from '@material-ui/core';
import styled from "styled-components"
import { CenteredDiv } from '../../Containers/Home/styles';

const StyledContainer = styled.div`
  width: 335px;
  flex: none;
  height: 100vh;
  background-color: #e8dede;
  padding: 2rem;
  color: brown;
  overflow-y: scroll;
`

export default function RecipesList(props) {
    const {onClick} = props;
    const {recipes, isLoading} = useSelector((state) => state.search);
    return (
        <StyledContainer>
            {isLoading && <LinearProgress />}
            {recipes?.length ? (
                <List>
                    {recipes.map((recipe) => (
                        <ListItem key={recipe.id} button onClick={() => onClick(recipe.id)}>
                            <ListItemText primary={recipe.name} />
                        </ListItem>
                    ))}
                </List>
            ): <CenteredDiv>No recipes match your criteria.</CenteredDiv>}
        </StyledContainer>
    );
}