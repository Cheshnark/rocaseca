import './Search.css';
import { useState, useEffect } from 'react';
import skull from '../../skull.png'

import SearchBar from '../../Components/SearchBar/SearchBar';
import NavBar from '../../Components/NavBar/NavBar';


const Search = () => {
    const [crags, setCrags] = useState([]);
    const [bar, setBar] = useState("");
    const [searchCrag, setSearchCrag] = useState("");
    const [destilledCrags, setDestilledCrags] = useState([]);

    const filterCrags = (() => {
        setSearchCrag(bar.toLowerCase());

        const cragsTraps = crags.filter((crag) => {
            const cragName = (crag.cragname).toLowerCase().split(/\s+/);
            const localityName = (crag.locality).toLowerCase().split(/\s+/);
            console.log(searchCrag);

            return cragName.includes(searchCrag) || localityName.includes(searchCrag);
        })

        setDestilledCrags(cragsTraps);
        console.log(destilledCrags);
     

      })

    useEffect(() => {
      const fetchCrags = async () => {
        // Mientras desarrollo. Uso un proxy en package.json, necesario eliminar esa parte de la ruta
        const response = await fetch('/main/crags/');
        const json = await response.json();

        if(response.ok){
           setCrags(json);
        }
      }

      fetchCrags()
      
    }, [])

    return (
        <>
        <NavBar />
        <main className="search">
            <div className="search-container">
                <img src={skull} alt="skull-with-sunny-mountain" />
                <h2>Busca un sector o localidad</h2>
                <SearchBar />
                <input type="text" value={bar} onChange={(e) => {setBar(e.target.value)}}/>
                <button onClick={filterCrags}>Jum</button>
            </div>
            <div className="search-results">
                {destilledCrags.map((crag) => {
  
                    return (
                        <div className='search-results__card'>
                            <h3>{crag.cragname}</h3>
                            <p>{crag.locality}</p>
                        </div>
                    )
                })}
            </div>
            
        </main>
        </>
    )
}

export default Search;