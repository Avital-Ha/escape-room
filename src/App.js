import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import First from './components/First';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/first" element={<First />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
