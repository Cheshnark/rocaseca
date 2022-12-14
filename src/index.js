import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import { UsersContextProvider } from './context/UsersContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
// De haber más de un contexto, el de mayor orden engloba al resto, usuarios a posts, por ejemplo
    <UsersContextProvider>
        <App />
    </UsersContextProvider>
);
