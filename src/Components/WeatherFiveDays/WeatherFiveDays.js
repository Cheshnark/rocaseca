import './WeatherFiveDays.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import WeatherIcon from '../WeatherIcon/WeatherIcon';

const WeatherFiveDays = () => {
    const location = useLocation();
    const crag = location.state?.crag;
    let cragId = crag._id;
    const fiveDaysWeather = crag.fiveDaysWeather;
    const today = (new Date()).getDate();
    const month = (new Date()).getMonth();

    const lastDate = crag.fiveDaysUpdate;
    const currentDate = (new Date()).getTime();
    const oneHour = 60 * 60 * 1000; 


    const fetchCrags = async () => {
      // Mientras desarrollo. Uso un proxy en package.json, necesario eliminar esa parte de la ruta
      const response = await fetch(`http://localhost:8000/main/crags/five-days/` + cragId);
      const json = response.json();

      if(response.ok){
         console.log(json);
      }
    }

 
    useEffect(() => {
        if ((currentDate - lastDate) > oneHour || !lastDate){
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
    }, [fiveDaysWeather])

    return (
        <div className="five-days">
            <div className="five-days-container">
                {fiveDaysWeather.FiveDays.map((day, index) =>{
                    return(
                    <div className="five-days-day" key={index}>
                    <h4>
                    {(today + index > 30)?(today + (index - 30)):(today + index)}
                    /{(month + 1 > 12)?(month - 10):(month + 1)}</h4>
                    <div className="five-days-img-container">
                        <WeatherIcon weatherIcon={day.Temperature.Day.Icon}/>
                    </div>
                    <p>Min-{day.Temperature.Minimum.Value}Cº</p>
                    <p>Max-{day.Temperature.Maximum.Value}Cº</p>
                </div>)}
                )}
            </div>
            <p className='five-days-description'>{fiveDaysWeather.Text}.</p>
        </div>
    )
}

export default WeatherFiveDays;