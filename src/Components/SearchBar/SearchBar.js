import './SearchBar.css'

const SearchBar = () => {
    return(
        <form className='search-bar' action="post">
            <input 
                type='text' 
                placeholder='Busca un sector o localidad'/>
            <button><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>
    )
};

export default SearchBar;