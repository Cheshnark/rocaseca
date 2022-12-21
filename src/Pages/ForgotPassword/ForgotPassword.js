import './ForgotPassword.css';
import { useState } from 'react';

import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('/user/forgot-password', {
            method: 'POST',
            body: JSON.stringify({email:email}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json();

        if(!response.ok){
            setError(json.error);
            console.log(error);
        }
        if(response.ok){
            setError(null);
            setEmail('');
            setMessage(json.Message);
            console.log(json);
        }
    }

    return(
        <>
            <NavBar />
            <main className="forgot-password">
                <div className="forgot-password-content">
                <h2>¿Has olvidado tu contraseña?</h2>
                    <p>Escribe tu email para que te enviemos las instrucciones para recuperarla</p>
                    <form onSubmit={handleSubmit} className="forgot-password-form">
                        <input 
                                type='text'
                                name='email'
                                value={email}
                                placeholder='Email ' 
                                onChange={(e) => setEmail(e.target.value)} />
                        <button type='submit'>Enviar</button>
                    </form>
                    {error && <div className="login-error">{error}</div> }
                    {message && !error &&  <div className="login-error">{message}</div>}
                </div>
            </main>
            <Footer />
        </>
    )
}

export default ForgotPassword;