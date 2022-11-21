import './DrawerComp.css'
import {Link} from 'react-router-dom';

const DrawerComp = () => {

    return (
        <div className="drawer-comp">
            <div className="menu">
                <i class="fa-solid fa-x" />
                <div className="drawer-comp__content">
                    <h2 className="title">Menú</h2>
                    <ul>
                        <Link to='/beers'>
                            <li>Sectores</li>
                        </Link>
                        <Link to='/random'>
                            <li>Regístrate</li>
                        </Link>
                        <Link to='/about'>
                            <li>Login</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DrawerComp;