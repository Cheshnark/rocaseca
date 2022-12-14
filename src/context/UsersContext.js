import { createContext, useReducer } from "react";

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

    console.log('AuthContext state: ', state);

    return (
         
        <UsersContext.Provider value={{...state, dispatch}}>
            { children }
        </UsersContext.Provider>
    )
}

// Los valores que establezcamos aquí pueden consumirse en toda la app, para ello, 
// es necesario importar este "context" en el index.js, que abrace a la "App". 