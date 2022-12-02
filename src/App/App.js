import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Main from '../Pages/Main/Main';
import Search from '../Pages/Search/Search';
import Crag from '../Pages/Crag/Crag';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/search" element={<Search />} />
            <Route path="/sector" element={<Crag />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </div>

  );
}

export default App;
