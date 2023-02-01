import './Profile.css';
import { useUsersContext } from '../../hooks/useUsersContext';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';

const Profile = () => {
    const { user } = useUsersContext();
    const [userInfo, setUserInfo] = useState();
    const [pending, setPending] = useState(false)

    useEffect(() => {
        const fetchUser = async () => {
            setPending(true)
          // Mientras desarrollo. Uso un proxy en package.json, necesario eliminar esa parte de la ruta
          const response = await fetch('https://rocaseca-server-production.up.railway.app/logged/user-info', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
          });
          const json = await response.json();
          
  
          if(response.ok){
            setUserInfo(json);
          }
        }
  
        if(user) {
            fetchUser()
            setPending(false)
        }
        
      }, [user])

    return (
        <>
            <NavBar />
            <main className="profile">
                <h2>Perfil de usuario</h2>
                {setPending && !userInfo && <h3 className='profile-loading'>Loading...</h3> }
                {userInfo && (
                <div className="profile-content">
                    <div className="profile-content__user">
                        <h3>Usuario</h3>
                        <p>{userInfo.username}</p>
                    </div>
                    <div className="profile-content__email">
                        <h3>Email</h3>
                        <p>{userInfo.email}</p>
                    </div>
                    <div className="profile-content__password">
                        <h3>Contraseña</h3>
                        <Link to={'/forgot-password'}>
                            <p className='change-password'>¿Cambiar contraseña?</p>
                        </Link>
                    </div>
                    <div className="profile-content__favs">
                        <h3>Sectores favoritos</h3>
                        <Link to={'/favorites'}>
                            <p>{(userInfo.favorites).length}</p>
                        </Link>
                    </div> 
                </div>
                )}
            </main>
            <Footer />
        </>
    )
}

export default Profile;