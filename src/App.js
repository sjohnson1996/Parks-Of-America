import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Nav from './components/Nav';
import Home from './pages/Home';
import AllParks from './pages/AllParks';
import Topics from './pages/Topics';
import Test from './pages/Test';
import './App.css';

function App() {

  const [currentRoute, setCurrentRoute] = useState('/');

  const grabRoute = (route) => {
    setCurrentRoute(route);
  }

  return (
    <Router>
      <Nav currentRoute={currentRoute} />
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} grabRoute={grabRoute} currentRoute={currentRoute} />} />
        <Route path="/allparks" render={(props) => <AllParks {...props} grabRoute={grabRoute} currentRoute={currentRoute} />} />
        <Route path="/topics" render={(props) => <Topics {...props} grabRoute={grabRoute} currentRoute={currentRoute} />} />
      </Switch>
    </Router>
  );
}

export default App;
