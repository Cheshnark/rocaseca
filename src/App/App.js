import './App.css';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
// import { useUsersContext } from '../hooks/useUsersContext';

import Main from '../Pages/Main/Main';
import Search from '../Pages/Search/Search';
import Crag from '../Pages/Crag/Crag';
import Favorites from '../Pages/Favorites/Favorites';
import Profile from '../Pages/Profile/Profile';
import ForgotPassword from '../Pages/ForgotPassword/ForgotPassword';
import LoginPage from '../Pages/LoginPage/LoginPage'
import RegisterPage from '../Pages/RegisterPage/RegisterPage';

function App() {
  // const { user } = useUsersContext();

  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/search" element={<Search />} />
            <Route path="/sector/:id" element={<Crag />} />
            {/* <Route path="/favorites" element={user ? <Favorites /> : <Navigate to="/" />} /> */}
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </div>

  );
}

export default App;
