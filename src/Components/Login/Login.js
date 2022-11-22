import './Login.css';

const Login = () => {
    return(
        <div className="login-content">
            <h2>LOGIN</h2>
            <form action="post" className="login-form">
                <input 
                    type="text"
                    placeholder='Usuario ' />
                <input 
                    type="text"
                    placeholder='Contraseña ' />
                <button>Login</button>
            </form>
            <p>¿Has olvidado tu contraseña? Pincha aquí para recuperarla.
            <br /><br />
            O REGÍSTRATE si no tienes una cuenta.</p>
        </div>
    )
}

export default Login;

