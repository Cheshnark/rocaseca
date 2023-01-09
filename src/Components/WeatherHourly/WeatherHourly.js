import './WeatherHourly.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import WeatherIcon from '../WeatherIcon/WeatherIcon';

let crag = {};

const WeatherHourly = () => {
    const location = useLocation();
    crag = location.state?.crag;
    let cragId = crag._id;
    const [hourlyWeather, setHourlyWeather] = useState(crag.twelveHoursWeather);
    const [lastDate, setLastDate] = useState(crag.hourlyUpdate);

    const currentDate = (new Date()).getTime();
    const oneHour = 60 * 60 * 1000; 
    const hourNow = (new Date()).getHours();

    const [clicked, setClicked] = useState(false)

    // Fetchs

    const fetchCrag = () => {
        const request = new XMLHttpRequest();
        request.open('GET', `http://localhost:8000/main/crags/` + cragId, false);  
        request.send(null);
        
        if (request.status === 200) {
          console.log('fetchCrags successful');
          crag = JSON.parse(request.response);
          return true;
        }else {
          return false
        }
        }

    const fetchHourly = async () => {
      const request = new XMLHttpRequest();
      request.open('GET', `http://localhost:8000/main/crags/hourly-weather/` + cragId , false);  
      request.send(null);
      
      if (request.status === 200) {
        console.log('fetchFive successful');
        return true;
      }else {
        return false
      }
    }

 
    useEffect(() => {
        if ((currentDate - lastDate) > oneHour || !lastDate){
            fetchHourly();
            fetchCrag();
            setHourlyWeather(crag.twelveHoursWeather);
            setLastDate(crag.hourlyUpdate);
        } else {
            console.log('AHhh, la paraste de pecho!');
         };
        
         // eslint-disable-next-line
    }, [])

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
                        <h4>{(hourNow + index > 23)?(hourNow + (index - 24 + 1)):(hourNow + index + 1)}:00</h4>
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