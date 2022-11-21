import './LoginButton.css';

const [visibleLogin, setVisibleLogin] = useState(false);

const clickLogin = () => {
    setVisibleLogin(!visibleLogin)
    console.log(visibleLogin);
};

const showLogin = () => {
    return visibleLogin;
}

const LoginButton = () => {
    return(
            <button className='login-button' onClick={clickLogin}>Login</button>
    )
}



export default LoginButton;