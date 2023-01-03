import './Main.css';
import { useEffect, useState } from 'react';
import { useUsersContext } from '../../hooks/useUsersContext';

//Componentes
import logo from '../../logo2.png';
import carabiner from '../../carabiner.png';
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';
import SearchBar from '../../Components/SearchBar/SearchBar';
import LoginButton from '../../Components/LoginButton/LoginButton';
import RegisterButton from '../../Components/RegisterButton/RegisterButton';

const Main = () => {
    const { user } = useUsersContext();

    return(
        <>
            <NavBar />
            <main className='main'>
            <section className="front">
                <div className="front-content">
                    <img src={logo} alt="rocaseca-logo" />

                    <h1>ROCASECA</h1>
                    <SearchBar main={true}/>
                    {!user && <LoginButton />}
                </div>
            </section>

            <section className="about">
                <div className="about-content">
                    <h2>¿Qué es Rocaseca?</h2>
                    <p>El objetivo de Rocaseca es que puedas saber que tiempo hace y va a hacer en los
                    sectores de escalada a los que piensas ir y saber cómo de posible es que la roca allí
                    esté seca. La rotura de cantos puede perjudicarte tanto a ti como a la vía o bloque y es algo
                    que queremos ayudar a evitar.                     
                    <br /><br />
                    La información de nuestra app es orientativa. Es importante tener en cuenta que el tipo de
                    roca y las condiciones climatológicas influyen en el tiempo que tarda un sector en secarse.
                    Será el escalador una vez en el sector el que haga la evaluación final del estado de la roca.
                    Aun así, esperamos ahorraros tiempo y unos litros de gasolina.
                    <br /><br />
                    En la Guía Rocaseca recopilamos y traducimos información
                    de diversos sitios web de escalada sobre los distintos tipos de roca, condiciones climatológicas 
                    y otras cuestiones que hemos tenido en cuenta para el desarrollo de la app y que os pueden ser 
                    de utilidad.</p>
                </div>

                <button>Guía Rocaseca</button>
                
            </section>
            
            <section className="register-login">
                <div className="register-login-content">

                    <img src={carabiner} alt="rocaseca-logo" />

                    {!user ? (
                    <>
                        <h2>ENTRA O REGÍSTRATE PARA GUARDAR TUS SECTORES</h2>
                        <LoginButton />
                        <br />
                        <RegisterButton />
                    </>
                    ):(
                        <>
                            <h2>¿ECHAS EN FALTA ALGÚN SECTOR? ESCRÍBENOS</h2>
                            <p>rocaseca.app@gmail.com</p>
                        </>
                    )}
                </div>
            </section>
            <Footer />
        </main>
        </>
        
    )
}

export default Main;