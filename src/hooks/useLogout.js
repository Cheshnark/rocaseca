import { useUsersContext } from "./useUsersContext";

//No es necesario enviar una petición al backend para el logout, todo se hace en el front

export const useLogout = () => {
    const { dispatch } = useUsersContext();

    const logout = () => {
        // Remove user from storage
        localStorage.removeItem('user');

        // Dispatch logout action
        dispatch({type: 'LOGOUT'});

    };

    return {logout}
}