import './Main.css';
import logo from '../../logo2.png';
import SearchBar from '../../Components/SearchBar/SearchBar';
import LoginButton from '../../Components/LoginButton/LoginButton';

const Main = () => {
    return(
        <main className='main'>
            <div className="container">

                <img src={logo} alt="rocaseca-logo" />

                <h1>ROCASECA</h1>
                <SearchBar></SearchBar>
                <LoginButton></LoginButton>
            </div>
        </main>
    )
}

export default Main;