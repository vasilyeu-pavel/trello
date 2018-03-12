import React, { Component } from "react";
import LabelHome from "./LabelHome";
import { NavLink } from "react-router-dom";
import Filters from "./filters";
import "./style.css";

class NavBar extends Component {
    render () {
        return (
            <nav className ="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <div className="navbar-brand">
                    <NavLink to = "/" style = {{
                        textDecoration: 'none'
                    }}><LabelHome /></NavLink>
                </div>
                <div className="nav-item active">
                    <Filters />
                </div>
            </nav>
        );
    }
}

export default NavBar;
