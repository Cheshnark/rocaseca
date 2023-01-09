import './ResetPassword.css';
import { useState } from 'react'; 

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showForm, setShowForm] = useState(true)
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // const user = {username, email, password};

        const response = await fetch('https://rocaseca-server-production.up.railway.app//user/forgot-password', {
            method: 'POST',
            // body: JSON.stringify(email),
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
            setPassword('');
            setConfirmPassword('');
            setShowForm(false);
            localStorage.setItem('user', JSON.stringify(json));
            // dispatch({type:'LOGIN', payload: json})
        }
    }

    return(
        <main className="reset-password">
            {showForm ? (
                <>
                <h2>Escribe una nueva contraseña</h2>
                <form onSubmit={handleSubmit} className="new-password">
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
                <button type='submit'>Cambiar contraseña</button>
                </form>
                </>
            ):(
                <div className="reset-completed">
                    <h2>Reset realizado con éxito</h2>
                </div>
            )}
            
        </main>
    )
}

export default ResetPassword;

