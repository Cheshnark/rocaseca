import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Main from '../Pages/Main/Main';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<Main />} />
            {/* <Route path="/beers" element={<Beers />} />
            <Route path="/random" element={<Random />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </div>

  );
}

export default App;
