import { createContext, useReducer, useEffect } from "react";

export const UsersContext = createContext();

export const usersReducer = (state, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {user: action.payload}
        case 'LOGOUT':
            return {user: null}
        default:
            return state
    }
};

export const UsersContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(usersReducer, {
        users: null
    });

    // To check if the user is logged when app renders for the first time
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));

        if(user) {
            dispatch({type: 'LOGIN', payload: user})
        }

    }, [])

    return (
         
        <UsersContext.Provider value={{...state, dispatch}}>
            { children }
        </UsersContext.Provider>
    )
}

// Los valores que establezcamos aquí pueden consumirse en toda la app, para ello, 
// es necesario importar este "context" en el index.js, que abrace a la "App". 