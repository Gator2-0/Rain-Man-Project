import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Rules from './components/rules';
import Home from './components/Home';
import AR from './components/AR';
import Game from './components/Game';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/Rules' Component={Rules}/>
        <Route path='/AR' Component={AR}/>
        <Route path='/Game' Component={Game}/>
      </Routes>

    </Router>
  );
}

export default App;
