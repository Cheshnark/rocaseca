import './NotFound.css';

import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';

const NotFound = () => {
    return (
        <>
            <NavBar />
            <main className="not-found">
                <div className="not-found-content">
                    <h2>404 PÁGINA NO ENCONTRADA</h2>
                    <p>La página que buscas no éxiste, hijo de la roca. Vuelve a la página de inicio y 
                    retoma tu camino. Ojalá tengas más suerte en futuras búsquedas. ¡Que la 
                    roca sea contigo! </p>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default NotFound;