import './SearchBar.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import WeatherToday from '../WeatherToday/WeatherToday';


const SearchBar = (props) => {
    const crags = props.crags;
    const main = props.main;
    const [bar, setBar] = useState("");
    const [searchCrag, setSearchCrag] = useState("");
    const [destilledCrags, setDestilledCrags] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const filterCrags = ((e) => {
        e.preventDefault();
        setSearchCrag(bar.toLowerCase());
        setBar("");
      })

    useEffect(() => {
        const cragsTraps = crags.filter((crag) => {
            const cragName = (crag.cragname).toLowerCase().split(/\s+/);
            const localityName = (crag.locality).toLowerCase().split(/\s+/);
            const searchCragSplit = searchCrag.split(/\s+/);

            const nameExist = (name, search) => {
                return search.every(search => {
                    return name.indexOf(search) !== -1;
                })
            } 
            const cragExist = (name, search) => {
                return search.every(search => {
                    return name.indexOf(search) !== -1;
                })
            } 

            return nameExist(cragName, searchCragSplit) || cragExist(localityName, searchCragSplit);
        })

        setDestilledCrags(cragsTraps);

        setShowResults(() => {
            if (destilledCrags > 0 || searchCrag.length === 0) {
                setShowResults(false);
            } else {
                setShowResults(true);
            }
        });

        // eslint-disable-next-line
    }, [searchCrag])    

    return(
        <>
            {main ? (
                <Link to={'/search'}>
                    <button className='to-search'><i class="fa-solid fa-magnifying-glass"></i> Busca sectores o localidades</button>
                </Link>
            ):(
                <form className='search-bar'>
                    <input 
                        type='text' 
                        placeholder='Busca un sector '
                        value={bar} 
                        onChange={(e) => {setBar(e.target.value)}}/>
                    <button onClick={filterCrags}><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>
            )}
            
        
        {showResults && (
            <div className="search-results-container">
            <div className="search-results">
            {(destilledCrags.length > 0) ? (
                destilledCrags.map((crag, index) => { 
                    return (
                        <Link to={`/sector/~${crag._id}`}>
                            <div className='search-results__card' key={index}>
                                <h3>{crag.cragname}</h3>
                                <p>{crag.locality}</p>
                                <WeatherToday crag={crag}/>
                            </div>
                        </Link> 
                    )
                })
            ):(
                <div className='search-results__card'>
                    <h3>¿Seguro que se escribe así?</h3>
                    <p>También es posible que no lo tengamos registrado. Si crees que es esto lo que
                    pasa, escribenos un mail a rocaseca@climb.com y revisaremos nuestra base de datos.</p>
                </div>
            )} 
        </div>
        </div>
        )}
        </>
    )
};

export default SearchBar;