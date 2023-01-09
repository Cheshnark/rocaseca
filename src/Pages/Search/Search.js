import './Search.css';
import { useState, useEffect } from 'react';
import skull from '../../skull.png'

import SearchBar from '../../Components/SearchBar/SearchBar';
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';


const Search = (props) => {
    const [crags, setCrags] = useState([]);

    useEffect(() => {
      const fetchCrags = async () => {
        // Mientras desarrollo. Uso un proxy en package.json, necesario eliminar esa parte de la ruta
        const response = await fetch('https://rocaseca-server-production.up.railway.app/main/crags/');
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
                <SearchBar crags={crags}/>
            </div>            
        </main>

        <Footer />
        
        </>
    )
}

export default Search;