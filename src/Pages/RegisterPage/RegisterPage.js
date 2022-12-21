import './RegisterPage.css';

import NavBar from '../../Components/NavBar/NavBar';
import Register from '../../Components/Register/Register';
import Footer from '../../Components/Footer/Footer';

const RegisterPage = () => {
    return(
        <>
            <NavBar />
            <main className="register-page">
                <div className="register-container">
                    <Register />
                </div>
            </main>
            <Footer />
        </>
    )
}

export default RegisterPage;