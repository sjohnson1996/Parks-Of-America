import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from './components/Nav';
import Home from './pages/Home';
import AllParks from './pages/AllParks';
import './App.css';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/allparks" component={AllParks} />
      </Switch>
    </Router>
  );
}

export default App;
