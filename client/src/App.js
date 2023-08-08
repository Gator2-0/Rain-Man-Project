import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Rules from './components/rules';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/'/>
        <Route path='/Rules' Component={Rules}/>
      </Routes>

    </Router>
  );
}

export default App;
