import './Favorites.css';
import { useState, useEffect } from 'react';
import { useUsersContext } from '../../hooks/useUsersContext';
import { Link } from 'react-router-dom';

import NavBar from '../../Components/NavBar/NavBar';
import WeatherToday from '../../Components/WeatherToday/WeatherToday';
import Footer from '../../Components/Footer/Footer';

const Favorites = () => {
    const [crags, setCrags] = useState([]);
    const [favCragsList, setFavCragsList] = useState([]);
    let [favCrags, setFavCrags] = useState([]);
    const { user } = useUsersContext();

    useEffect(() => {
        const fetchCrags = async () => {
          // Mientras desarrollo. Uso un proxy en package.json, necesario eliminar esa parte de la ruta
          const response = await fetch('logged/favorite-crags-list', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
          });
          const json = await response.json();
          
  
          if(response.ok){
            setFavCragsList(json);
          }
        }
  
        if(user) {
            fetchCrags()
            
        }
        
      }, [user, favCragsList]);

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

      let cragList = [];

      crags.forEach((crag) => {
        if(favCragsList.includes(crag._id)){
          cragList.push(crag);

        }
      });
      setFavCrags(cragList)

      // eslint-disable-next-line
    }, [favCragsList, user])

  const favClickRemove = (cragId) =>{
      const fetchCragsList = async () => {
          // Mientras desarrollo. Uso un proxy en package.json, necesario eliminar esa parte de la ruta
          const response = await fetch(`logged/favorite-crags/${cragId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
          });
          const json = await response.json();
          
          if(response.ok){
              setFavCragsList(json.favorites);

          }
        }
  
        if(user) {
            fetchCragsList()
        }
  }

    return (
      <>
      <NavBar />
        <main className="favorites">
            <h2>Sectores Favoritos</h2>
            {user && (  
            favCrags.map((crag, index) => { 
              return (
                <div className='search-results__card' key={index}>
                    <div className="search-results__card-header">
                        <Link to={`/sector/${crag._id}`} state={{crag:crag}}>
                            <div className="search-results__card-title">
                                <h3>{crag.cragname}</h3>
                                <p>{crag.locality}</p>
                            </div>
                        </Link> 
                        {favCragsList && (
                            <div className="search-results__card-fav">
                                    <i className="fav-icon fa-solid fa-heart" onClick={() => favClickRemove(crag._id)}></i>          
                            </div>
                        )}
                    </div>
                                
                    <WeatherToday crag={crag}/>
                      </div>)})
            )}
        </main>
        <Footer />
      </>
    )
};

export default Favorites;