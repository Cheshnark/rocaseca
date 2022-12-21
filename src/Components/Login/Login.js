import './Login.css';
import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';
import { Link } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const {login, error, isLoading} = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password);
    }
    
    return(
        <div className="login-content">
            <h2>LOGIN</h2>
            <form onSubmit={handleSubmit} action="/sena" className="login-form">
                <input 
                    type='text'
                    name='email'
                    value={email}
                    placeholder='Email ' 
                    onChange={(e) => setEmail(e.target.value)} />
                <input 
                    type='password'
                    name='password'
                    value={password}
                    placeholder='Contraseña ' 
                    onChange={(e) => setPassword(e.target.value)} />
                <button type='submit' disabled={isLoading}>Login</button>
                {error && <div className="login-error">{error}</div> }
            </form>
            <p>¿Has olvidado tu contraseña? <Link to={'/forgot-password'}><span>Pincha aquí para recuperarla</span></Link>.
            <br /><br />
            O <Link to={'/register'}><span>REGÍSTRATE</span></Link> si no tienes una cuenta.</p>
        </div>
    )
}

export default Login;

