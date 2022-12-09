import './WeatherHourly.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import WeatherIcon from '../WeatherIcon/WeatherIcon';

const WeatherHourly = () => {
    const location = useLocation();
    const crag = location.state?.crag;
    let cragId = crag._id;
    const hourlyWeather = crag.twelveHoursWeather;

    const lastDate = crag.hourlyUpdate;
    const currentDate = (new Date()).getTime();
    const oneHour = 60 * 60 * 1000; 
    const hourNow = (new Date()).getHours();

    const [clicked, setClicked] = useState(false)


    const fetchCrags = async () => {
      // Mientras desarrollo. Uso un proxy en package.json, necesario eliminar esa parte de la ruta
      const response = await fetch(`http://localhost:8000/main/crags/five-days/` + cragId);
      const json = response.json();

      if(response.ok){
         console.log(json);
      }
    }

 
    useEffect(() => {
        if ((currentDate - lastDate) > oneHour){
            console.log('Dispara! Dispara!');
            fetchCrags()
            .then(res => {
                if (!res.ok){
                    throw Error ('Could not fetch data from that source');
                }
                return res.json();
            })
            .catch(err => {
                console.log(err);
                if(err.name === 'AbortError'){
                    console.log('fetch aborted');
                } else {
                    console.log(err);
                }})
        } else {
            console.log('AHhh, la paraste de pecho!');
         };
        
         // eslint-disable-next-line
    }, [hourlyWeather])

    const click = () => {
        setClicked(!clicked);
    }

    return (
        <div className="twelve-hours">
            <div className="twelve-hours-container">
                {!clicked? (
                    <div className="twelve-hours-accordion-controls">
                        <div className="accordion-text">
                            <h4>Pulsa para desplegar</h4>
                            <i class="fa-solid fa-angle-down" onClick={click}></i>
                        </div>
                    </div>
                ):(
                    <>
                    <div className="twelve-hours-accordion-controls">
                        <div className="accordion-text">
                            <h4>Pulsa para ocultar</h4>
                            <i class="fa-solid fa-angle-up" onClick={click}></i>
                        </div>
                        <hr />
                    </div>
                    {hourlyWeather.map((hour, index) =>{
                    return(
                    <div className="twelve-hours-hour" key={index}>
                        <h4>{(hourNow + index > 23)?(hourNow + (index - 24)):(hourNow + index)}:00</h4>
                        <div className="hour-img-container">
                            <WeatherIcon weatherIcon={hour.WeatherIcon}/>
                        </div>
                        <div className="hour-weather-info">
                            <p>{hour.Temperature.Value}Cº</p>
                            <p>Real Feel: {hour.RealFeelTemperature.Value}Cº</p>
                            <p><i class="fa-solid fa-droplet"></i> {hour.RainProbability}%</p>
                        </div>
                    </div>)}
                    )}
                    </>
                )}
                
            </div>
        </div>
    )
}

export default WeatherHourly;