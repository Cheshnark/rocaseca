import { useEffect } from 'react';
import './WeatherToday.css';

import WeatherIcon from '../WeatherIcon/WeatherIcon';

const WeatherToday = (props) => {

    let cragId = props.crag._id;
    const cragCurrentWeather = props.crag.currentWeather;

    const lastDate = props.crag.currentUpdate;
    const currentDate = (new Date()).getTime();
    const oneHour = 60 * 60 * 1000; 


    const fetchCrags = async () => {
      // Mientras desarrollo. Uso un proxy en package.json, necesario eliminar esa parte de la ruta
      const response = await fetch(`http://localhost:8000/main/crags/current-weather/` + cragId);
      const json = response.json();

      if(response.ok){
         console.log(json);
      }
    }

    console.log('Current date: ' + currentDate, 'Last date: ' + lastDate, 'One hour to ms: ' + oneHour );
    console.log(props.crag);
    
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
    }, [cragCurrentWeather])
 
        
        


    return (
        <div className="current-weather">
            <div className="today-container">
            <div className="today-img-container">
                <WeatherIcon weatherIcon={cragCurrentWeather.WeatherIcon}/>
                <p>{cragCurrentWeather.Temperature.Metric.Value + cragCurrentWeather.Temperature.Metric.Unit}</p>
            </div>
            <div className="today-flex">
                <p><span>{cragCurrentWeather.WeatherText}</span></p>
                {cragCurrentWeather.HasPrecipitation && 
                    <p><i class="fa-solid fa-droplet"></i> {cragCurrentWeather.PrecipitationSummary.Metric.Value + cragCurrentWeather.PrecipitationSummary.Metric.Unit}</p>
                }
                <div className="today-lowergrid">
                    <p><span>Feel:</span> {cragCurrentWeather.RealFeelTemperature.Metric.Value + cragCurrentWeather.RealFeelTemperature.Metric.Unit}</p>
                    <p><span>UV:</span> {cragCurrentWeather.UVIndexText}</p>
                    <p><i class="fa-solid fa-cloud"></i> {cragCurrentWeather.CloudCover}%</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default WeatherToday;