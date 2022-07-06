import * as React from 'react';
import { useCallback, useState, useEffect } from 'react';
import Input from "@material-ui/core/Input"
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
        debouncedSearch(searchText);
    };
    
    return (
        <Input
            autoFocus={true}
            fullWidth={true}
            onChange={handleSearch}
            value={searchText}
        />
    );
}