import React from 'react';
import './searchbox.css';

const SearchBox = () => {
    return (
        <div className='pa2'>
            <input 
                className='search'
                type='search'
                placeholder='Szukaj'
                id='search'
            />
        </div>
    );
}

export default SearchBox;