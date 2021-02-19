import React from 'react'; 
import './App.css';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <>
    <Router>
      <Navbar2 />
      <Switch>
        <Route path='/' exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
