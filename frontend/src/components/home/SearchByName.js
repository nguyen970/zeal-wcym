import * as React from 'react';
import { useCallback, useState, useEffect } from 'react';
import { TextField } from "@material-ui/core"
import { debounce } from 'lodash';
import { useSelector } from 'react-redux';

export default function SearchByName(props) {
    const {name = '', onChange} = props;
    const [searchText, setSearchText] = useState(name);
    const debouncedSearch = useCallback(debounce(onChange, 800), []);
    const {isLoading} = useSelector((state) => state.search);

    useEffect(() => {
        setSearchText(name);
    }, [isLoading]);

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
        <>
            {!isLoading && 
                <TextField
                    autoFocus={true}
                    onChange={handleSearch}
                    value={searchText}
                    variant="outlined"
                    style={{width: 400, flex: 'none'}}
                    placeholder="Search for recipe name"
                />
            }
        </>
    );
}