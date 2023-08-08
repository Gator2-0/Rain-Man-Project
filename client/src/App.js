import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Rules from './components/rules';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/Rules' Component={Rules}/>
      </Routes>

    </Router>
  );
}

export default App;
