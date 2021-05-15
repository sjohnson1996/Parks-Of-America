import '../App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <div className="nav-style">
            <h2 className="nav-title-style">Home</h2>
            <h2 className="nav-title-style">All Parks</h2>
        </div>
    );
}

export default Nav;