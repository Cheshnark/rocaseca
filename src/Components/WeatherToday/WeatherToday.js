import { useEffect } from 'react';
import './WeatherToday.css';

import WeatherIcon from '../WeatherIcon/WeatherIcon';

const WeatherToday = (props) => {

    let cragId = props.crag._id;
    const cragCurrentWeather = props.crag.currentWeather;
    
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