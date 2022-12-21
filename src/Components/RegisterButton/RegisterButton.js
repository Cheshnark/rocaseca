import './RegisterButton.css';
import { useState } from 'react';

import Register from '../Register/Register';

const RegisterButton = () => {

    // Show/Hide register form pop-up

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
                    <i class="fa-solid fa-x register-x" onClick={clickRegister}/>
                    <Register />
                </div>
             </div>
         )}
     </>        
    )
}

export default RegisterButton;