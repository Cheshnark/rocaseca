import './SearchBar.css';
import { useState } from 'react';


const SearchBar = () => {

    return(
        <form className='search-bar' action="post">
            <input 
                type='text' 
                placeholder='Busca un sector '/>
            <button><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>
    )
};

export default SearchBar;