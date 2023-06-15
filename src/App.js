import { Navigation } from './components/navigation';
import Home from './pages/Home';
import Orin from './pages/orin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Simulation from './pages/Simulation';


function App() {
  return (
    <Router>
      <Navigation />
      <Routes >
        <Route path="/Moborobot" element={<Home />} />
        <Route path="/Moborobot/installation" element={<Orin />} />
        <Route path="/Moborobot/simulation" element={<Simulation />} />
      </Routes>
    </Router>
  );
}

export default App;
