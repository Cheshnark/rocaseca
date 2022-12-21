import './NavBar.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../../hooks/useLogout';
import { useUsersContext } from '../../hooks/useUsersContext';

import DrawerComp from '../DrawerComp/DrawerComp';
import logo from '../../logo2.png';

const NavBar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isMobile, setIsMobile] = useState(null);
    const [visible, setVisible] = useState(true);
    const [shown, setShown] = useState(false); 
    const [hidden,setHidden] = useState("visible")
    const { logout } = useLogout();
    const { user } = useUsersContext()

    useEffect( () => {
        window.addEventListener('load', handleSize)
      }, []);

    useEffect( () => {
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll)
    })

    const handleSize = () => {
      if (window.innerWidth < 600) {
        setIsMobile(true);
      } else{
        setIsMobile(false);
      }
    }

    const handleClick = () => {
        setShown(!shown);
        
        if(hidden === "visible"){
          document.body.style.overflow = "hidden";
          setHidden("hidden");
        }else{
          document.body.style.overflow = "visible";
          setHidden("visible");
        };    
      };

    const logoutClick = () => {
      logout();
    }

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
  
      if(currentScrollPos > prevScrollPos){
        setVisible(false);
      } else {
        setVisible(true);
      }
  
      setPrevScrollPos(currentScrollPos);
    }

    return(
        <nav style={{position:visible && 'top-0', visibility: !visible && 'hidden'}}
          className={`${visible ? 'smooth' : 'invisible'}`} >
            <div className="img-container">
              <Link to='/'><img src={logo} alt="rocaseca-logo" /></Link> 
            </div>
            {isMobile ? (
            <i className="fa-solid fa-bars" onClick={handleClick} style={{visibility: shown && 'hidden'}} />
          ) : (
            <nav>
              
              <ul class="nav-links">
               <Link to='/search'><li>Buscador</li></Link>
               {!user && (
                <div className="nav-unlogged">
                  <Link to='/register'><li>Registrate</li></Link>
                  <Link to='/login'><li>Login</li></Link>
                </div>
               )}
              </ul>
              {user && (
              <div className="nav-logged">
                <Link to={'/profile'}>
                  <li>Perfil</li>
                </Link>
                <span>{user.email}</span>
                <button onClick={logoutClick}>Log out</button>  
              </div> 
              )}        
          </nav>
          )}
          {shown && (
            <div onClick={handleClick}>
              <div className="div-drawercomp">
                <DrawerComp />
              </div>
            </div>
          )}
            
        </nav>
    )
};

export default NavBar;