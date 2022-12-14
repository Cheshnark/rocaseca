import './Crag.css';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';
import WeatherToday from '../../Components/WeatherToday/WeatherToday'; 
import WeatherFiveDays from '../../Components/WeatherFiveDays/WeatherFiveDays';
import WeatherHourly from '../../Components/WeatherHourly/WeatherHourly';
import CragInfo from '../../Components/CragInfo/CragInfo';

const Crag = () => {
    const { id } = useParams();
    const location = useLocation();
    const crag = location.state?.crag;

    return (
        <>
            <NavBar />
            
            <main className="crag">
                <section className="weather-container">
                    <h2>{crag.cragname}</h2>
                    <hr />
                    <h3>Tiempo Hoy</h3>
                    <WeatherToday cragId={id} crag={crag}/>
                    <h3>Tiempo a cinco días</h3>
                    <WeatherFiveDays />
                    <h3>Tiempo hora a hora</h3>
                    <WeatherHourly />
        
                </section>
                <section className="info-container">
                    <h3>Información del sector</h3>
                    <CragInfo />
                </section>
            </main>

            <Footer/>
        </>
    )
};

export default Crag;

