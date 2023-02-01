import './SearchBar.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useUsersContext } from '../../hooks/useUsersContext';
import { useLogout } from '../../hooks/useLogout'; 

import { fetchDelete, fetchAdd } from '../favoriteFetchs';
import { fetchToday } from '../fetchWeather';

import WeatherToday from '../WeatherToday/WeatherToday';

let crags = [];
let searchCrag = "";

const SearchBar = () => {
    const [bar, setBar] = useState("");
    const [destilledCrags, setDestilledCrags] = useState(null);
    const [showResults, setShowResults] = useState(false);
    const { user } = useUsersContext();
    const { logout } = useLogout();
    const [favCragsList, setFavCragsList] = useState([]);
    const [favCragsListString, setFavCragListString] = useState("");
    const [pending, setPending] = useState(false);
    const [pendingHeart, setPendingHeart] = useState(false);

    const currentDate = (new Date()).getTime();
    const oneHour = 60 * 60 * 1000; 

    // Fetchs to DB
    const fetchCrags = () => {
      const request = new XMLHttpRequest();
      request.open('GET', `https://rocaseca-server-production.up.railway.app/main/crags/`, false);  
      request.send(null);
      
      if (request.status === 200) {
        crags = JSON.parse(request.response);
        return true;
      }else {
        return false
      }
      }

    // useEffects
    useEffect(() => {
        fetchCrags();
        searchCrag = "";
      }, [])

    useEffect(() => {
        const fetchCragsList = async () => {
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
            setFavCragListString(() => {
                return favCragsList.toString();
            })
          }else{
            logout();
          }
        }
  
        if(user) {
            fetchCragsList()
        }
        
        // eslint-disable-next-line
      }, [favCragsListString, pendingHeart])

    const filterCrags = ((e) => {
        e.preventDefault();
        searchCrag = bar.toLowerCase();
        setBar("");
      })

    useEffect(() => {
        const firstFilter = crags.filter((crag) => {
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

        let idArray = [];
        let changed = false;

        if(firstFilter.length > 0){
            firstFilter.forEach((crag) => {
                const cragId = crag._id;   
                idArray.push(cragId);

                if((currentDate - crag.currentUpdate) > oneHour){
                    changed = true;                  
                }else {
                    setDestilledCrags(firstFilter);
                }
            });
        }else {
            setDestilledCrags(null);
        }

        const finalFetch = () => {
            setPending(true)
            idArray.forEach((id) => {
                fetchToday(id)         
            })
            setPending(false)
            fetchCrags();
            const secondFilter = crags.filter(crag => {
                return idArray.includes(crag._id);
            });
            setDestilledCrags(secondFilter);  
    }

        if(changed) {  
            finalFetch() 
            setPending(false)   
        } 

        setShowResults(() => {
            if (searchCrag.length === 0) {
                setShowResults(false);
            } else {
                setShowResults(true);
            }
        });

        // eslint-disable-next-line
    }, [searchCrag])    

    const favClickAdd = (cragId) =>{    
        if(user) {
            setPendingHeart(true);
            fetchAdd(cragId, user)
            .then((res) => {
                setFavCragsList(res.favorites);
                setFavCragListString(() => {
                    return favCragsList.toString();
                })
                setPendingHeart(false)
            })
        }
    };

    const favClickRemove = (cragId) =>{
        if(user) {
            setPendingHeart(true);
            fetchDelete(cragId, user)
            .then((res) => {
                setFavCragsList(res.favorites);
                setFavCragListString(() => {
                    return favCragsList.toString();
                })
                setPendingHeart(false)
            })
        }
    }

    return(
        <>
            
        <form className='search-bar'>
            <input 
                type='text' 
                placeholder='Busca un sector '
                value={bar} 
                onChange={(e) => {setBar(e.target.value)}}/>
            <button onClick={filterCrags}><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>
    
            
        {pending ? (<h3>Loading...</h3>):(
        showResults && (
            <div className="search-results-container">
            <div className="search-results">
            {(destilledCrags) ? (
                destilledCrags.map((crag, index) => { 
                    return (
                        <div className='search-results__card' key={index}>
                            <div className="search-results__card-header">
                                <Link to={`/sector/${crag._id}`} state={{crag:crag}}>
                                    <div className="search-results__card-title">
                                        <h3>{crag.cragname}</h3>
                                        <p>{crag.locality}</p>
                                    </div>
                                </Link> 
                                {favCragsList && user && (
                                    <div className="search-results__card-fav">
                                        {favCragsList.includes(crag._id) ? (
                                            pendingHeart ? (
                                                <i className="fa-solid fa-spinner spin"></i>
                                            ):(
                                                <i className="fav-icon fa-solid fa-heart" onClick={() => favClickRemove(crag._id)}></i>
                                            )
                                        ):(
                                            pendingHeart ? (
                                                <i className="fa-solid fa-spinner spin"></i>
                                            ):(
                                                <i className="fav-icon fa-regular fa-heart" onClick={() => favClickAdd(crag._id)}></i>
                                            )
                                        )}
                                    </div>
                                )}
                            </div>
                            <WeatherToday crag={crag}/>
                        </div>
                       
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
        )
        )}
        </>
    )
};

export default SearchBar;