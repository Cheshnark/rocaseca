import './Crag.css';
import { useParams } from 'react-router-dom';

import NavBar from '../../Components/NavBar/NavBar';
import WeatherToday from '../../Components/WeatherToday/WeatherToday'; 
import WeatherFiveDays from '../../Components/WeatherFiveDays/WeatherFiveDays';
import WeatherHourly from '../../Components/WeatherHourly/WeatherHourly';

const Crag = () => {
    const { id } = useParams();
    console.log(id);

    return (
        <>
            <NavBar />
            
            <main className="crag">
                <section className="weather-container">
                    <h2>Nombre del sector</h2>
                    <h3>Tiempo Hoy</h3>
                    {/* <WeatherToday />
                    <WeatherFiveDays />
                    <WeatherHourly /> */}
        
                </section>
                <section className="info-container">
                    <h2>Información del sector</h2>
                </section>
            </main>
        </>
    )
};

export default Crag;

