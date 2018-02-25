import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CreateBoards from './createBoards/index'
import BoardsList from './Board/BoardsList'
import NavBar from './navBar/navBar'
import TaskBoard from './Board/taskBoard/taskBoard.js'
import {Route, Link, Switch } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

class App extends Component {
    render() {
        return (
            <div>   
                <NavBar />
                    <div className = "box">
                       <Switch>
                         <Route path="/" render = {this.getBoards} exact = {true}/>
                         <Route path ="/board/:id" component = {this.getTask} exact = {true}/>
                      </Switch>
                    </div>
            </div>          
        )
    }

    getBoards = () => {
        return (
                <div>
                    <CreateBoards />
                    <BoardsList />
                </div>
            )
    }

    getTask = ({ match  }) => {
     const id = match.params.id
        return (
                <div>
                    <TaskBoard id = {id}/>
                </div>
            )
    }
}

export default App