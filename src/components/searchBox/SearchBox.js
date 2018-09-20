import React from 'react';
import { Input } from 'semantic-ui-react'
import './searchbox.css';

const SearchBox = () => {
    return (
        <div className='pa2'>
            {/* <input 
                className='searchBox'
                type='search'
                placeholder='Szukaj'
                id='search'                
            /> */}
            <Input size='large' type='search' icon='search' placeholder='Szukaj' />
        </div>
    );
}

export default SearchBox;