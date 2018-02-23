import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.css'
import CreateBoards from './createBoards/index'
import BoardsList from './Board/BoardsList'
import './style.css'
import {HashRouter as Router, Route, NavLink} from 'react-router-dom'

class App extends Component {
    render() {
        return (
        	<Router>
                <div className = "box">
                	<CreateBoards />
                	<BoardsList />
                </div>  
            </Router>      
        )
    }
}

export default App