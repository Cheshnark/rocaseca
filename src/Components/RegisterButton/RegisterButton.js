import './RegisterButton.css';
import { useState } from 'react';

const RegisterButton = () => {

    const [showRegister, setShowRegister] = useState(false);

    const clickRegister = () => {
        if(!showRegister){
            document.body.style.overflow = "hidden";
            setShowRegister(!showRegister);
          }else{
            document.body.style.overflow = "visible";
            setShowRegister(!showRegister);
        }

    };
    
    return(
        <>
        <button className='register-button' onClick={clickRegister}>Regístrate</button>
         {showRegister && (
             <div className="register" >
                <div className="register-container">
                    <i class="fa-solid fa-x login-x" onClick={clickRegister}/>
                    <div className="register-content">
                        <h2>REGÍSTRATE</h2>
                        <form action="post" className="register-form">
                            <input 
                                type="text"  
                                placeholder='Nombre de usuario '/>
                            <input 
                                type="text"
                                placeholder='Email ' />
                            <input 
                                type="text"
                                placeholder='Repite el email ' />
                            <input 
                                type="text"
                                placeholder='Contraseña ' />
                            <input 
                                type="text"
                                placeholder='Repite la contraseña ' />
                            <div className="terms">
                                <input 
                                    type="checkbox"
                                    id='terms'
                                    name='terms' />
                                <label for="terms">Acepto los términos y condiciones</label>
                            </div>
                            <button>Regístrate</button>
                        </form>
                        <p> O ENTRA si ya tienes una cuenta</p>
                    </div>
                 </div>
             </div>
         )}
     </>        
    )
}

export default RegisterButton;