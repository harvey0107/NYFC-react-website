import React from 'react'; 
import './App.css';
import Navbar2 from './components/Navbar2'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import AboutUs from './components/pages/AboutUs';
import Career from './components/pages/Career';
import Contact from './components/pages/Contact';
import Exercises from './components/pages/Exercises';
import UpperBody from './components/pages/UpperBody';
import LowerBody from './components/pages/LowerBody';


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
          <Exercises />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
        <Route exact path='/career'>
          <Career />  
        </Route>
        <Route exact path='/upper'>
          <UpperBody />
        </Route>
        <Route exact path='/lower'>
          <LowerBody />
        </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
