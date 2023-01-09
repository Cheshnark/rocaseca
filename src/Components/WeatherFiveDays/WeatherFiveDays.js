import './WeatherFiveDays.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import WeatherIcon from '../WeatherIcon/WeatherIcon';

let crag = {};

const WeatherFiveDays = () => {
    const location = useLocation();
    crag = location.state?.crag;
    let cragId = crag._id;
    const [fiveDaysWeather, setFiveDaysWeather] = useState(crag.fiveDaysWeather);
    const [lastDate, setLastDate] = useState(crag.fiveDaysUpdate);

    const today = (new Date()).getDate();
    const month = (new Date()).getMonth();
    const currentDate = (new Date()).getTime();
    const oneHour = 60 * 60 * 1000; 

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

    const fetchFive = async () => {
      const request = new XMLHttpRequest();
      request.open('GET', `http://localhost:8000/main/crags/five-days/` + cragId , false);  
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
            fetchFive();
            fetchCrag();
            setFiveDaysWeather(crag.fiveDaysWeather);
            setLastDate(crag.fiveDaysUpdate);
        } else {
            console.log('AHhh, la paraste de pecho!');
         };
        
         // eslint-disable-next-line
    }, [])

    return (
        <div className="five-days">
            <div className="five-days-container">
                {fiveDaysWeather && 
                fiveDaysWeather.FiveDays.map((day, index) =>{
                    return(
                    <div className="five-days-day" key={index}>
                    <h4>
                    {(today + index > 30)?(today + (index - 30)):(today + index)}
                    /{(month + 1 > 12)?(month - 10):(month + 1)}</h4>
                    <div className="five-days-img-container">
                        <WeatherIcon weatherIcon={day.Temperature.Day.Icon}/>
                    </div>
                    <p>Min {day.Temperature.Minimum.Value}Cº</p>
                    <p>Max {day.Temperature.Maximum.Value}Cº</p>
                </div>)}
                )}
            </div>
            <p className='five-days-description'>{fiveDaysWeather.Text}.</p>
        </div>
    )
}

export default WeatherFiveDays;