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
        <Route path="/" element={<Home />} />
        <Route path="/installation" element={<Orin />} />
        <Route path="/simulation" element={<Simulation />} />
      </Routes>
    </Router>
  );
}

export default App;
