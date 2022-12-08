import './WeatherIcon.css';

import sunny from '../../1.png';
import mostlySunny from '../../2.png';
import partlySunny from '../../3.png';
import intermitentClouds from '../../4-5.png';
import mostlyCloudy from '../../6.png';
import cloudy from '../../7-8.png';
import fog from '../../11.png';
import showers from '../../12.png';
import cloudyShowers from '../../13-14.png';
import storm from '../../15.png';
import cloudyStorm from '../../16-17.png';
import rain from '../../18.png';
import snow from '../../19-20-21-22-23-43-44.png';
import ice from '../../24.png';
import hardRain from '../../25-26-29.png';
import hot from '../../30.png';
import cold from '../../31.png';
import windy from '../../32.png';
import clearNight from '../../33.png';
import cloudyNight from '../../34-35-36-38.png';
import hazyNight from '../../37.png';
import cloudyShowersNight from '../../39-40.png';

const WeatherIcon = (props) => {
    const iconNumber = props.weatherIcon;
    let icon = 0;
    switch (iconNumber) {
        case 1:
            icon = sunny;
            break;
        case 2:
            icon = mostlySunny;
            break;
        case 3:
            icon = partlySunny;
            break;    
        case 4 || 5:
            icon = intermitentClouds;
            break;
        case 6:
            icon = mostlyCloudy;
            break;
        case 7 || 8:
            icon = cloudy;
            break;
        case 11:
            icon = fog;
            break;
        case 12:
            icon = showers;
            break;
        case 13 || 14:
            icon = cloudyShowers;
            break;
        case 15:
            icon = storm;
            break;
        case 16 || 17:
            icon = cloudyStorm;
            break;
        case 18:
            icon = rain;
            break;
        case 19 || 20 ||21 || 22 || 23 || 43 || 44:
            icon = snow;
            break;
        case 24:
            icon = ice;
            break;
        case 25 || 26 || 29:
            icon = hardRain;
            break;
        case 30:
            icon = hot;
            break;
        case 31:
            icon = cold;
            break;
        case 32:
            icon = windy;
            break;
        case 33:
            icon = clearNight;
            break;
        case 34 || 35 || 36 || 38:
            icon = cloudyNight;
            break;
        case 37:
            icon = hazyNight;
            break;
        case 39 || 40:
            icon = cloudyShowersNight;
            break;
        default:
            break;
    }
    
    return (
        <img className='weather-icon' src={icon} alt="weather-icon" />
    )
}

export default WeatherIcon;