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
import BenchPress from './components/pages/BenchPress';
import ArnoldPress from './components/pages/ArnoldPress';
import Squat from './components/pages/Squat';
import LegPress from './components/pages/LegPress';

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
        <Route exact path='/exercises/upper'>
          <UpperBody />
        </Route>
        <Route exact path='/exercises/lower'>
          <LowerBody />
        </Route>
        <Route exact path='/exercises/upper/benchpress'>
          <BenchPress />
        </Route>
        <Route exact path='/exercises/upper/arnoldpress'>
          <ArnoldPress />
        </Route>
        <Route exact path='/exercises/lower/squat'>
          <Squat />
        </Route>
        <Route exact path='/exercises/lower/legpress'>
          <LegPress />
        </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
