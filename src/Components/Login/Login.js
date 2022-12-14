import './Login.css';
import { useState } from 'react';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {email, password};

        const response = await fetch('/user/register', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json();

    //     if(!response.ok){
    //         setError(json.error);
    //         console.log(error);
    //     }
    //     if(response.ok && email === confirmEmail && password === confirmPassword){
    //         setError(null);
    //         console.log('New user added correctly', json.username);
    //         setUsername('');
    //         setEmail('');
    //         setPassword('');
    //         setConfirmEmail('');
    //         setConfirmPassword('');
    //         clickRegister();
    //         dispatch({type:'CREATE_USER', payload: json})
    //     }
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
                <button type='submit'>Login</button>
            </form>
            <p>¿Has olvidado tu contraseña? Pincha aquí para recuperarla.
            <br /><br />
            O REGÍSTRATE si no tienes una cuenta.</p>
        </div>
    )
}

export default Login;

