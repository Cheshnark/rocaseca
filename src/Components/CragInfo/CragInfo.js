import './CragInfo.css';
import { useLocation } from 'react-router-dom';

const CragInfo = () => {
    const location = useLocation();
    const crag = location.state?.crag;
    const cragInfo = crag.cragInfo;

    return (
        <div className="crag-info">
            <div className="crag-info__container">
                <p>{cragInfo.Description}</p>
                <h4>¿Dónde dormir?</h4>
                <p>{cragInfo.Sleep}</p>
                <h4>Agua</h4>
                <p>{cragInfo.Water}</p>
                <h4>Cómo llegar</h4>
                <p>{cragInfo.HowToGo}</p>
                <h4>Fuente</h4>
                <p>La información del sector ha sido extraida de "enlavertical.com", para acceder a más
                información de la escuela y sus sectores, visita: <a href={cragInfo.Website} target="_blank" rel="noreferrer">{cragInfo.Website}</a> .</p>
            </div>
        </div>
    )
};

export default CragInfo;