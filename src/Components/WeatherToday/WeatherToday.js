import { useEffect } from 'react';
import './WeatherToday.css';

const WeatherToday = (props) => {
    let cragId = props.crag._id;
    const cragCurrentWeather = props.crag.currentWeather;

    const [lastYear, lastMonth, lastDay, lastHour] = [
        props.crag.lastUpdate.year,
        props.crag.lastUpdate.month,
        props.crag.lastUpdate.day,
        props.crag.lastUpdate.hour ]

    const [currentYear, currentMonth, currentDay, currentHour] = [
        (new Date()).getFullYear(),
        (new Date()).getMonth(),
        (new Date()).getDate(),
        (new Date()).getHours(),
    ]


    const fetchCrags = async () => {
      // Mientras desarrollo. Uso un proxy en package.json, necesario eliminar esa parte de la ruta
      const response = await fetch(`http://localhost:8000/main/crags/current-weather/` + cragId);
      const json = response.json();

      if(response.ok){
         console.log(json);
      }
    }

 
    useEffect(() => {
        if (lastYear < currentYear || lastMonth < currentMonth || lastDay < currentDay || lastHour < currentHour){
            console.log('Dispara! Dispara!');
            // fetchCrags()
            // .then(res => {
            //     if (!res.ok){
            //         throw Error ('Could not fetch data from that source');
            //     }
            //     return res.json();
            // })
            // .catch(err => {
            //     console.log(err);
            //     if(err.name === 'AbortError'){
            //         console.log('fetch aborted');
            //     } else {
            //         console.log(err);
            //     }})
        } else {
            console.log('AHhh, la paraste de pecho!');
         };
        
         // eslint-disable-next-line
    }, [cragCurrentWeather])
 
        
        


    return (
        <div className="current-weather">
            <div className="today-container">
            <img src={cragCurrentWeather.WeatherIcon} alt="weather-icon" />
            <div className="today-grid">
                <p>{cragCurrentWeather.WeatherText}</p>
                <p>{cragCurrentWeather.HasPrecipitation}</p>
                <p>{cragCurrentWeather.Temperature.Metric.Value + cragCurrentWeather.Temperature.Metric.Unit}</p>
            </div>
            </div>
        </div>
    )
}

export default WeatherToday;