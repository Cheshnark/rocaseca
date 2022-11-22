import './LoginButton.css';
import { useState } from 'react';
import Login from '../Login/Login';

const LoginButton = () => {

    const [showLogin, setShowLogin] = useState(false);

    const clickLogin = () => {
        if(!showLogin){
            document.body.style.overflow = "hidden";
            setShowLogin(!showLogin);
          }else{
            document.body.style.overflow = "visible";
            setShowLogin(!showLogin);
        }

    };
    
    return(
        <>
            <button className='login-button' onClick={clickLogin}>Login</button>
            {showLogin && (
                <div className="login" >
                    <div className="login-container">
                        <i class="fa-solid fa-x login-x" onClick={clickLogin}/>
                        <Login />
                    </div>
                </div>
            )}
        </>
    )
}



export default LoginButton;