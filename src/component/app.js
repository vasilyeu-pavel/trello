import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BoardsList from './Board/BoardsList';
import NavBar from './navBar/navBar';
import TaskBoard from './Board/taskBoard/taskBoard.js';
import { Route, Link, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import { ModalContainer } from 'react-router-modal';


class App extends Component {
    render () {
        const { location } = this.props;

        return (
            <div>
                <NavBar />
                <div className = "box">
                    <Switch>
                        <Route path="/" render = {this.getBoards} exact/>
                        <Route path ="/board/:id" component = {this.getTask}/>
                    </Switch>
                </div>
                <ModalContainer />
            </div>
        );
    }

    getBoards = () => {
        return (
            <div>
                <BoardsList />
            </div>
        );
    }

    getTask = ({ match }) => {
        const id = match.params.id;
        return (
            <div >
                <TaskBoard id = {id} match = {match}/>
            </div>
        );
    }
}

export default App;
