import './Register.css';
import { useState } from 'react';
import { useUsersContext } from '../../hooks/useUsersContext';
import { Link } from 'react-router-dom';

const Register = () => {
    // Register form POST code
    const {dispatch} = useUsersContext();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {username, email, password};

        const response = await fetch('/user/register', {
            method: 'POST',
            body: JSON.stringify(user),
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
            console.log('New user added correctly', json.username);
            setUsername('');
            setEmail('');
            setPassword('');
            setConfirmEmail('');
            setConfirmPassword('');
            localStorage.setItem('user', JSON.stringify(json));
            dispatch({type:'LOGIN', payload: json})
        }
    }


    
    return(
           <div className="register-container">
               <div className="register-content">
                   <h2>REGÍSTRATE</h2>
                   <form onSubmit={handleSubmit} className="register-form">
                       <input 
                           type='text'
                           name='username'
                           value={username}
                           placeholder='Nombre de usuario '
                           onChange={(e) => setUsername(e.target.value)}
                           />
                       <input 
                           type='text'
                           name='email'
                           value={email}
                           placeholder='Email '
                           onChange={(e) => setEmail(e.target.value)} />
                       <input 
                           required
                           type='text'
                           placeholder='Repite el email '
                           value={confirmEmail}
                           onChange={(e) => setConfirmEmail(e.target.value)} />
                       <input 
                           type='password'
                           name='password'
                           value={password}
                           placeholder='Contraseña '
                           onChange={(e) => setPassword(e.target.value)} />
                       <input 
                           required
                           type='password'
                           placeholder='Repite la contraseña ' 
                           value={confirmPassword}
                           onChange={(e) => setConfirmPassword(e.target.value)}
                           />
                       <div className="terms">
                           <input 
                               type='checkbox'
                               id='terms'
                               name='terms' />
                           <label for="terms">Acepto los términos y condiciones</label>
                       </div>
                       <button type='submit'>Regístrate</button>
                   </form>
                   {error ? (<div className='error'>{error}</div>):
                       (<p> O <Link to={'login'}><span>ENTRA</span></Link> si ya tienes una cuenta</p>)}
               </div>
            </div>
     
    )
}

export default Register;