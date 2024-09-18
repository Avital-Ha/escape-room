import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import First from './components/First';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Router basename="/escape-room"> {/* Set the basename */}
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/first" element={<First />} />
        </Routes>
      </div>
    </Router>
  );
}
