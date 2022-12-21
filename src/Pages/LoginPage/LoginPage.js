import './LoginPage.css';

import NavBar from '../../Components/NavBar/NavBar';
import Login from '../../Components/Login/Login';
import Footer from '../../Components/Footer/Footer';

const LoginPage = () => {
    return(
        <>
            <NavBar />
            <main className="login-page">
                <div className="login-container">
                    <Login />
                </div>
            </main>
            <Footer />
        </>
    )
}

export default LoginPage;