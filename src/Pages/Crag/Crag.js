import './Crag.css';

import NavBar from '../../Components/NavBar/NavBar';
import WeatherToday from '../../Components/WeatherToday/WeatherToday'; 
import WeatherFiveDays from '../../Components/WeatherFiveDays/WeatherFiveDays';
import WeatherHourly from '../../Components/WeatherHourly/WeatherHourly';

const Crag = () => {
    return (
        <>
            <NavBar />
            
            <main className="crag">
                <section className="weather-container">
                    <h2>Nombre del sector</h2>
                    <WeatherToday />
                    <WeatherFiveDays />
                    <WeatherHourly />
        
                </section>
                <section className="info-container">
                    <h2>Información del sector</h2>
                </section>
            </main>
        </>
    )
};

export default Crag;

