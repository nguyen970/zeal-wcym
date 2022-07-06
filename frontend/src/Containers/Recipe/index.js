import * as React from 'react';
import { useSelector } from 'react-redux';
import { LinearProgress } from '@material-ui/core';

export default function Recipe() {
    const  {recipe, isLoading} = useSelector((state) => state.recipe );
    return (
        <div>
            {recipe && <div> instructions {recipe[0].instructions}</div>}
            {isLoading && <LinearProgress />}
        </div>
    )
}