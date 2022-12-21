import './App.css';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import { useUsersContext } from '../hooks/useUsersContext';

import Main from '../Pages/Main/Main';
import Search from '../Pages/Search/Search';
import Crag from '../Pages/Crag/Crag';
import Favorites from '../Pages/Favorites/Favorites';
import Profile from '../Pages/Profile/Profile';
import ForgotPassword from '../Pages/ForgotPassword/ForgotPassword';
import LoginPage from '../Pages/LoginPage/LoginPage'
import RegisterPage from '../Pages/RegisterPage/RegisterPage';
import NotFound from '../Pages/NotFound/NotFound';

function App() {
  const { user } = useUsersContext();

  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/search" element={<Search />} />
            <Route path="/sector/:id" element={<Crag />} />
            <Route path="/favorites" element={user ? <Favorites /> : <Navigate to="/" replace />} />
            <Route path="/profile" element={user ? <Profile /> : <Navigate to="/" replace />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/login" element={!user ? <LoginPage /> : <Navigate to="/" />} />
            <Route path="/register" element={!user ? <RegisterPage /> : <Navigate to="/" />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
