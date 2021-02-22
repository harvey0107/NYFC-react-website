import React from 'react'; 
import './App.css';
import Navbar2 from './components/Navbar2'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import AboutUs from './components/pages/AboutUs';

function App() {
  return (
    <>
    <Router>
      <AboutUs />
      <Switch>
        <Route path='/' exact component=
        {Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
