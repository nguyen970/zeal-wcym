import * as React from 'react';
import { useCallback, useState, useEffect } from 'react';
import { TextField } from "@material-ui/core"
import { debounce } from 'lodash';

export default function SearchByName(props) {
    const {name = '', onChange} = props;
    const [searchText, setSearchText] = useState(name);
    const debouncedSearch = useCallback(debounce(onChange, 1000), []);
    
    useEffect(() => {
        setSearchText(searchText);
    }, [searchText]);

    const handleSearch = (event) => {
        setSearchText(event.target.value);
        if (event.target.value) {
            debouncedSearch(searchText);
        } else {
            onChange('');
        }      
        
    };
    
    return (
        <TextField
            autoFocus={true}
            onChange={handleSearch}
            value={searchText}
            variant="outlined"
            style={{width: 400, flex: 'none'}}
            placeholder="Search for recipe name"
        />
    );
}