import './WeatherToday.css';
import useCurrentWeatherFetch from '../useWeatherFetch';

const WeatherToday = () => {
    const {weather, pending, error} = useCurrentWeatherFetch('http://localhost:8000/weather');
    const today =     {
        "LocalObservationDateTime": "2022-12-01T17:57:00+01:00",
        "EpochTime": 1669913820,
        "WeatherText": "Despejado",
        "WeatherIcon": 33,
        "HasPrecipitation": false,
        "PrecipitationType": null,
        "IsDayTime": false,
        "Temperature": {
            "Metric": {
                "Value": 9.2,
                "Unit": "C",
                "UnitType": 17
            },
            "Imperial": {
                "Value": 49.0,
                "Unit": "F",
                "UnitType": 18
            }
        }}

    return (
        <div className="today-container">
            <h3>Tiempo Hoy</h3>
            <img src={today.WeatherIcon} alt="weather-icon" />
            <p>{today.WeatherText}</p>
            <p>{today.HasPrecipitation}</p>
            <p>{today.Temperature.Metric.Value + today.Temperature.Metric.Unit}</p>

        </div>
    )
}

export default WeatherToday;