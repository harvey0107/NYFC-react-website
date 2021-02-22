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
        </Route>
        <Route exact path='/career'>
        </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
