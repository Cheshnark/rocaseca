import './Login.css';

const Login = () => {
    return(
        <div className="login">
            <div className="login-container">
                <h2>Login</h2>
                <form action="post" className="login-form">
                    <input type="text" />
                    <input type="text" />
                    <button></button>
                </form>
                <p>¿Has olvidado tu contraseña? Pincha aquí para recuperarla.
                <br /><br />
                O REGÍSTRATE si no tienes una cuenta.</p>

            </div>
        </div>
    )
}

export default Login;

