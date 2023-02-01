import './Favorites.css';
import { useState, useEffect } from 'react';
import { useUsersContext } from '../../hooks/useUsersContext';
import { Link } from 'react-router-dom';

import { fetchDelete } from '../../Components/favoriteFetchs';

import NavBar from '../../Components/NavBar/NavBar';
import WeatherToday from '../../Components/WeatherToday/WeatherToday';
import Footer from '../../Components/Footer/Footer';

const Favorites = () => {
    const [crags, setCrags] = useState([]);
    const [favCragsList, setFavCragsList] = useState([]);
    let [favCrags, setFavCrags] = useState([]);
    const[pending, setPending] = useState(true);
    const [pendingHeart, setPendingHeart] = useState(false);
    const { user } = useUsersContext();

    useEffect(() => {
        const fetchFavoriteCrags = async () => {
          // Mientras desarrollo. Uso un proxy en package.json, necesario eliminar esa parte de la ruta
          const response = await fetch('https://rocaseca-server-production.up.railway.app/logged/favorite-crags-list', {
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
            fetchFavoriteCrags()            
        }
        
      }, [user, favCragsList]);

    useEffect(() => {
      const fetchCrags = async () => {
        // Mientras desarrollo. Uso un proxy en package.json, necesario eliminar esa parte de la ruta
        const response = await fetch('https://rocaseca-server-production.up.railway.app/main/crags/');
        const json = await response.json();

        if(response.ok){
           setCrags(json);
        }

        setPending(false)
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
    if(user) {
      setPendingHeart(true);
      fetchDelete(cragId, user)
      .then((res) => {
          setFavCragsList(res.favorites);
          setPendingHeart(false)
      })
  }
  }

    return (
      <>
      <NavBar />
        <main className="favorites">
            <h2>Sectores Favoritos</h2>
            {pending && <h3 className='profile-loading'>Loading...</h3> }
            {user && favCrags && (  
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
                              {pendingHeart ? (
                                <i className="fa-solid fa-spinner spin"></i>
                              ):(
                                <i className="fav-icon fa-solid fa-heart" onClick={() => favClickRemove(crag._id)}></i>          
                              )}
                                    
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