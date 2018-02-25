import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LabelHome from './LabelHome'
import {Route, Link, Switch } from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            <nav className ="navbar navbar-light bg-light">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                      <li className="nav-item active">
                        <Link to = "/"><LabelHome /></Link>
                      </li>
                </ul>     
            </nav>          
        )
    }
}

export default NavBar