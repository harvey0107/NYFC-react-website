import React from 'react'; 
import './App.css';
import Navbar2 from './components/Navbar2'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import AboutUs from './components/pages/AboutUs';
import Career from './components/pages/Career';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
    <Router>
      <Navbar2 />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/aboutus'>
          <AboutUs />
        </Route>
        <Route exact path='/exercises'>
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
        <Route exact path='/career'>
          <Career />
        </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
