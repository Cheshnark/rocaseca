import './DrawerComp.css'
import {Link} from 'react-router-dom';
import { useLogout } from '../../hooks/useLogout';
import { useUsersContext } from '../../hooks/useUsersContext';

const DrawerComp = () => {
    const { logout } = useLogout();
    const { user } = useUsersContext()

    const logoutClick = () => {
        logout();
      }

    return (
        <div className="drawer-comp">
            <div className="menu">
                <i class="fa-solid fa-x" />
                <div className="drawer-comp__content">
                    <h2 className="title">Menú</h2>
                    <ul>
                        <Link to='/search'>
                            <li>Buscador</li>
                        </Link>
                        {!user && (
                            <div className="drawer-unlogged">
                            <Link to='/register'>
                                <li>Regístrate</li>
                            </Link>
                            <Link to='/login'>
                                <li>Login</li>
                            </Link>
                        </div>
                        )}
                        {user && (
                            <div className="drawer-logged">
                                <Link to='/favorites'>
                                    <li>Favoritos</li>    
                                </Link>
                                <Link to='/profile'>
                                    <li>Perfil</li>    
                                </Link>
                                <div className="drawer-user">
                                    <span>{user.email}</span>
                                    <li onClick={logoutClick} className="drawer-logout" >Log out</li>
                                </div>   
                            </div>
                        )}
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DrawerComp;