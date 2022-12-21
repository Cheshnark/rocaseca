import './Profile.css';
import { useUsersContext } from '../../hooks/useUsersContext';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';

const Profile = () => {
    const { user } = useUsersContext();
    const [userInfo, setUserInfo] = useState();

    useEffect(() => {
        const fetchUser = async () => {
          // Mientras desarrollo. Uso un proxy en package.json, necesario eliminar esa parte de la ruta
          const response = await fetch('logged/user-info', {
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
        }
        
      }, [user])

      console.log(userInfo);

    return (
        <>
            <NavBar />
            <main className="profile">
                <h2>Profile</h2>
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
                        <p>¿Cambiar contraseña?</p>
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